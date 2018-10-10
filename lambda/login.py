import boto3
import os
import uuid
from boto3.dynamodb.conditions import Key, Attr


def lambda_handler(event,context):

	username = event["email"]
	password = event["password"]

	dynamodb = boto3.resource('dynamodb')
	table = dynamodb.Table(os.environ['DYNAMO_DB_NAME'])
	response ={}

	if username and password:

		item = table.query(KeyConditionExpression=Key('email').eq(username))

		result = item["Items"];
		if result[0]['authToken'] =='x':
			authToken='YYY'

			response= table.update_item(Key={'email':username},   
				UpdateExpression='SET #FIELD = :value',
                ExpressionAttributeNames={
                '#FIELD': 'authToken',},
    ExpressionAttributeValues={	
    ':value': authToken},
    ReturnValues='UPDATED_NEW')
			print(response)

	return response