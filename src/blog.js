import React from 'react'
import BlogPost from './blog-post'
import axios from 'axios';
const dataItems = [{
    "content": "<p dir=\"ltr\">Peoples are often resistant to change. This is so true when it comes to adoption of cloud in large enterprises.</p>\n<p dir=\"ltr\">Cloud Computing is here to stay, and large enterprises have realised that focusing on IT and data center management is not their core competencies and cloud provides most cost effective and highly scalable solutions for all IT needs.</p>\n<p dir=\"ltr\">Most enterprise have to do lot of changes to move to cloud, it's not only technical details that need to change but culture of companies needs a change too.</p>\n<p dir=\"ltr\">One of the most underestimated roadblocks to cloud adoption is this resistance. The success of failure of the move to cloud is based on how this resistance is handled.</p>\n<p dir=\"ltr\">Iron Fist ruling in this scenario is going to end up having bad impact as you are making an enemy out of people who know best about your existing systems. Bringing them onboard at the start of the project becomes critical, providing as much information and details can help with getting them onboard.</p>\n<p dir=\"ltr\">Whatever be the approach Cloud is here to stay, so Resistance is futile.<br><br><br><br></p>\n",
    "id": "62104d0f-c292-4449-9044-366a892c97da",
    "title": "Resistance is Futile",
    "published": "September 2018",
    "tags": "AWS,Cloud",
    "sortOrder": 3.0
}, {
    "content": "<div dir=\"ltr\" style=\"text-align: left;\" trbidi=\"on\">\n<div dir=\"ltr\">\n<i>One of the predictions we get about the future of  is that robots are taking over the world, sci-fi movies have been warning us all these while.</i></div>\n<div dir=\"ltr\">\nAre they really taking over? Some might say that time will come but in future.</div>\n<div dir=\"ltr\">\n<b>But I feel it\u2019s happening now. Don\u2019t panic!!!</b></div>\n<div dir=\"ltr\">\nWe are in the era of digital technology, advanced machine learning and AI boom.</div>\n<div dir=\"ltr\">\nRobots need not be something equivalent of Terminator style gun sporting robots , Robots can be invisible software robots like the ones taking over  driving our car for instance. Or may be processing some clerical tasks using Robotic Process Automation. </div>\n<div dir=\"ltr\">\nOne question that comes to mind is why we intelligence beings prefer them (robots) to do these jobs, how are they having advantage here. Mainly because our brains not designed for doing these jobs efficiently especially things to do with memorization.<br />\nOur human brain is more tuned to innovate , process information, get us out of trouble or stay safe.(may be from robots).</div>\n<div dir=\"ltr\">\nIf you imagine prehistoric human he would have to learn things by processing his surroundings and come up with solutions and survive.</div>\n<div dir=\"ltr\">\nWith civilization , our needs changed and we needed to memorize things and evolution did not do any good to our memory. Some of these repeated tasks are all based on memory and makes us very inefficient.</div>\n<div dir=\"ltr\">\nHowever, machines are designed to do these repeated tasks effectively and efficiently.</div>\n<div dir=\"ltr\">\n<b><i>With the advent of technology and robots taking over jobs which we were never designed to be doing, hope to see human innovation free flow again leading to a new era in advancements of civilization.</i></b></div>\n</div>\n",
    "id": "394a5890-1b07-40f0-b9a4-e8bb25acad58",
    "title": "Are Robots taking over?",
    "published": "September 2018",
    "tags": "RPA,AI,ML",
    "sortOrder": 2.0
}, {
    "content": "<p dir=\"ltr\">The debate is on as to which is better, but I believe the choice depends on what you anticipate your project to evolve into.</p>\n<p dir=\"ltr\">If your project has changes which involves addition of new things just by creating classes and keeping existing functionality untouched then OO is suitable.</p>\n<p dir=\"ltr\">Also most modern languages allow both use of OO and Functional together like say lambda expression which are functional constructs have been introduced in all major OO languages like C# , Java 8+ , Python etc..</p>\n<p dir=\"ltr\">Functional programming is not new and has gained popularity in recent years due to the fact that we have seen growth in parallel execution environment with advent of Big Data, Data Science, ML and AI.</p>\n<p dir=\"ltr\">OOP has its own advantages and so does Functional programming. There will always be supported of both concepts. A hybrid system is the way forward as many of top languages seem to agree.</p>\n",
    "id": "6a31a942-5a0e-4efa-8769-facf603e6f22",
    "title": "FUNCTIONAL PROGRAMMING VS OBJECT ORIENTED PROGRAMMING",
    "published": "September 2018",
    "sortOrder": 4.0
}, {
    "content": "<div dir=\"ltr\" style=\"text-align: left;\" trbidi=\"on\">\nOne of the foremost developments of the year 2018 is the need to guard your personal data.<br />\n<br />\nPrivacy and personal data management  turning out to be a very important focus of the technology industry this year.<br />\n<br />\n With legislation like GDPR coming into force, and lawmakers are highlighting the importance of safeguarding personal data. Some lawmakers are using the same to get into power.<br />\n<br />\nRaising awareness of how technology has leveraged personal data over the last decade to build individual profiles and how this personal information is now being used by the development of machine learning and artificial intelligence to drive people's choices.<br />\n<br />\nTo a large generation of people who are very much new to these technologies are unaware of things which can be derived out of all shared information.<br />\n<br />\nEven the technologically focused generation and more specifically people in the technology industry who can understand the power of today's technology need to help common people better understand effects safe usf technology and when and where to protect your personal information.<br />\n<br />\nDouglas Adams once said<br />\n<blockquote class=\"tr_bq\">\n<br />\nDon't believe anything you read on the net. Except for this. Well, including this, I suppose.</blockquote>\n<br />\nThis holds true this day. Since time immemorial rulers have always wanted to manipulate their subjects, earlier they had religion, god etc which were general topics for.keeping people under their rule.<br />\n<br />\n Today they are more powerful they have data about each and every one of us making them powerful.<br />\n<br />\nThey say \"You can be much more influential if people are not aware of your influence\" Now that cat is out of the bag let's see what's next?</div>\n",
    "id": "285e2f0d-fa65-47ab-bdbe-370c969f06cb",
    "title": "Are we safe ?",
    "published": "September 2018",
    "sortOrder": 1.0
}];
class Blog extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                posts: []
            };

        };

        createTable() {
            let bloglist = [];
            for (var i = 0; i < this.state.posts.length; i++) {
                bloglist.push( <div key={this.state.posts[i].id}>  <BlogPost key={this.state.posts[i].id} id = {this.state.posts[i].id}
                    data = {this.state.posts[i]}/></div > )
            }
            return bloglist;
        };
        componentDidMount() {
            axios.get(`https://api.adithyaneelavara.info/v1/?postId=*`)
                .then(res => {
                    const posts = res.data.map(obj => obj);
                    posts.sort((a, b) => (a.sortOrder < b.sortOrder) ? 1 : ((b.sortOrder < a.sortOrder) ? -1 : 0));
                    this.setState({
                        posts
                    });
                });
        };
        render() {

            return ( <div  key="blog"> {
                    this.createTable().map(function(listValue) {
                        return <div key={listValue.key}>
                         {listValue} 
                         < /div>;
                    })
                } </div>);
            }

        }

        export default Blog;