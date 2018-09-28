import boto3
import botocore
import zipfile
import io
import os
import mimetypes

def lambda_handler(event, context):


	s3 = boto3.resource('s3')
	sns = boto3.resource('sns')
	SNS_ARN = os.environ['SNS_ARN']
	topic = sns.Topic(SNS_ARN)
	BUILD_BUCKET_NAME=os.environ['BUILD_BUCKET_NAME']
	BUILD_ARTIFACT_NAME=os.environ['BUILD_ARTIFACT_NAME']
	MAIN_BUCKET_NAME=os.environ['MAIN_BUCKET_NAME']
	location={
		"bucketName":BUILD_BUCKET_NAME,
		"objectKey":BUILD_ARTIFACT_NAME,
	}
	try:
		job = event.get('CodePipeline.job')
		
		print(job)
		
		if job:
			for artifact in job['data']['inputArtifacts']:
				if artifact['name'] =='MyAppBuild':
					location = artifact['location']['s3Location']
		
		print (f'Building Portfolio from Location:{location}')
		
		bucket = s3.Bucket(MAIN_BUCKET_NAME)
		build_bucket = s3.Bucket(location['bucketName'])
		    
		portfolio_zip = io.BytesIO()
		build_bucket.download_fileobj(location['objectKey'],portfolio_zip)
		    
		with zipfile.ZipFile(portfolio_zip) as myZip:
			for nm in myZip.namelist():
				obj= myZip.open(nm)
				content_type=mimetypes.guess_type(nm)[0]
				if content_type:
					bucket.upload_fileobj(obj,nm,ExtraArgs={'ContentType':content_type})
				else:
					bucket.upload_fileobj(obj,nm)
				bucket.Object(nm).Acl().put(ACL='public-read')
		topic.publish(Subject="Portfolio Build Success!!",Message='Portfolio was  deployed succesfully!!')
		if job:
			codepipeline = boto3.client('codepipeline')
			codepipeline.put_job_success_result(jobId=job['id'])
	except:
		topic.publish(Subject="Portfolio Build Failed!!",Message='Portfolio was not deployed succesfully!!')
		if job:
			codepipeline = boto3.client('codepipeline')
			codepipeline.put_job_failure_result(jobId=job['id'])
		raise		
	return "Job Done!"