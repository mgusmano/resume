angular.module('ionicApp')
.run(["$httpBackend", function ($httpBackend) {
    $httpBackend.whenGET(/templates\/[\w]+\.[\w]+$/).passThrough();

    var projects = [
        {
            id: 'angulardash',
            name: 'Angular.js HTML5 Dashboard',
            image: 'angular.png',
            url: 'http://gusmano.azurewebsites.net/AngularDashboard/index.html#/',
            thumb: '',
            dates: 'May 2014 - current',
            role: 'Senior HTML5 Architect',
            client: '',
            description: 'Dashboard HTML5 application completely implemented in Angular.js.  This is an early version that demonstrates widgets implemented as Angular directives, ability to add and remove widgets, use of Google Charts, drag and drop of widgets, animated notification icon on upper right of page, slide out layout options on right side of page.',
            clienttools: [
                'AngularJS 1.3',
                'Bootstrap 3',
                'ui-bootstrap',
                'ui-sorter',
                'less-1.7.4',
                'jQuery',
                'jQuery-ui',
                'SASS',
                'angular-mocks',
                'angular-route',
                'animate.css',
                'lodash',
                'malhar-angular-dashboard',
                'metisMenu'
            ],
            servertools: [
                'Windows Azure Hosting'
            ]
        },

        {
            id: 'iconicresume',
            name: 'Mobile Hybrid HTML5 Resume Demo - Ionic Framework, Angular.js ',
            image: 'resume.png',
            url: 'http://gusmano.azurewebsites.net/SenchaWorkspace/Build/Production/EMSPEEDExt5/#Angular/97366',
            thumb: '',
            dates: 'September 2014 - current',
            role: 'Senior HTML5 Architect',
            client: 'for demo purposes',
            description: 'This application - a sample application built to demonstrate the creation of a hybrid mobile application with HTML5.  It is built with the Ionic Framework (ionicframework.com), which utilizes Angular.js and Cordova.',
            clienttools: [
                'Ionic Framework',
                'Angular.js 1.3 (rc)',
                'Apache Cordova'
            ],
            servertools: [
                'Windows Azure Hosting'
            ]
        },

        { 
            id: 'emspeed20', 
            name: 'HTML5 Dashboard Framework with ExtJS 5 and Angular.js 1.3', 
            image: '8-EMSPEED20.png',
            url: 'http://gusmano.azurewebsites.net/SenchaWorkspace/Build/Production/EMSPEEDExt5/#Dashboard/97366',
            thumb: '' ,
            dates: 'May 2014 - current',
            role: 'Senior HTML5 Architect',
            client: 'Large Oil and Gas Provider - Houston, TX',
            description: 'Architected and implemented a Web-based Dashboard Framework.  Built as a 100% browser-based \'Single Page Application\' with HTML5, ExtJS5 and Angular 1.3.  Integration of AngularJS 1.3 custom Directives as \'widgets\', support for dynamic directive loading,programatic AngularJS Bootstrap, dynamic AngularJS $compile of widgets',
            clienttools: [
            'Jira (requirements, task management, ticketing)',
            'GIT (version control)',
            'Sencha ExtJS 5',
            'Angular 1.3 (rc)',
            'JQuery 1.9.1',
            'Data Visualization with d3js (d3js.org)',
            'Siesta (testing)'
            ],
            servertools: [
            'Microsoft .NET Framework 4.5 - C#',
            'Microsoft WCF/Entity Framework/LINQ',
            'SQL Server 2008'
            ]
        },
        { 
            id: 'mobile', 
            name: 'Hybrid Mobile Web Application with Sencha Touch 2.3',
            url: 'http://localhost:1002/SenchaWorkspace/build/production/EMSPEEDTouch/index.html',
            image: 'mobile.png', 
            thumb: 'madEMSPEED.jpg' ,
            dates: 'April 2013 - August 2013',
            role: 'Senior HTML5/Mobile Architect',
            client: 'Large Oil and Gas Provider - Houston, TX',
            description: 'Architected and implemented a project management mobile web application. Included initial effort to implement for responsive design (from mobile to desktop).',
            clienttools: [
                'Jira (requirements, tasks, ticketing)',
                'Git (version control)',
                'Continuous Integration (internal tool)',
                'Sencha Touch 2.3',
                'JQuery 1.9.1',
                'Siesta (testing)',
                'Cordova/PhoneGap' 
            ],
            servertools: [
                'Microsoft .NET Framework 4.5 in C#', 
                'Microsoft Windows Communication Foundation (WCF)',
                'SQL Server 2008',
                'ASP.NET MVC/WebAPI'
            ]
        },
        {
            id: 'youtube',
            name: 'YouTube Viewer - Sencha ExtJS 5 Demonstration of features',
            image: 'YouTube.png',
            url: 'http://gusmano.azurewebsites.net/SenchaWorkspace/Build/Production/extjs5youtube/#empty/empty',
            thumb: '',
            dates: 'July 2014 - August 2014',
            role: 'Senior HTML5 Architect',
            client: '',
            description: 'You Tube viewer implemented as an ExtJS 5 demo application. Showcases several capabilities of ExtJS5, including Deep Routing, New \'Crisp\' theme, client state management, data binding.',
            clienttools: [
                'ExtJS 5',
                'JQuery 1.10.2',
                'JavaScript',
                'CSS/SASS',
                'MockJax (AJAX Mocking)'
            ],
            servertools: [
                'Windows Azure Hosting'
            ]
        },
        {
            id: 'ipadresume',
            name: 'Online Mobile Resume - various JavaScript frameworks and libraries',
            image: 'me.png',
            url: 'http://gusmano.azurewebsites.net/SenchaWorkspace/Build/Production/MjgApp/',
            thumb: '' ,
            dates: 'November 2013 - December 2013',
            role: 'Senior HTML5 Architect',
            client: '',
            description: 'Resume implemented as a mobile web application.  Includes several innovative ways to page through data. Showcases many different developer frameworks and libraries.',
            clienttools: [
                'HTML5, Sencha Touch 2.3', 
                'JQuery 1.10.2', 
                'AngularJS 1.2.1', 
                'Modernizr', 
                'JavaScript', 
                'CSS/SASS', 
                'MockJax (AJAX Mocking)',
                'jquery.flips', 
                'TouchSwipe',
                'jQuery.qrcode'
            ],
            servertools: [
                'Windows Azure Hosting'
            ]
        },
        { 
            id: 'emspeed12', 
            name: 'HTML5 Single Page Application - Sencha Ext JS 4.2', 
            image: 'EMSPEED12.png',
            url: 'http://gusmano.azurewebsites.net/SenchaWorkspace/Build/Production/EMSPEEDExt5/#Dashboard/97366',
            thumb: '' ,
            dates: 'June 2012 - April 2014',
            role: 'Senior HTML5 Architect',
            client: 'Large Oil and Gas Provider - Houston, TX',
            description: 'Architected and implemented a Web-based project management application.  Built as a 100% browser-based \'Single Page Application\' with HTML5, JavaScript, AJAX and CSS3.',
            clienttools: [
            'Jira (requirements, task management, ticketing)',
            'Mercurial (version control)',
            'Sencha ExtJS 4.2',
            'JQuery 1.9.1',
            'Siesta (testing)'
            ],
            servertools: [
            'Microsoft .NET Framework 4.5 - C#',
            'Microsoft WCF/Entity Framework/LINQ',
            'SQL Server 2008'
            ]
        },
            {
                id: 'emspeedpoc', name: 'HTML5 Graphical Proof of Concept - JavaScript InfoVis Toolkit',
                image: 'EMSPEEDPOC.jpg', 
                thumb: '' ,
                dates: 'February 2012 - May 2012',
                role: 'Senior HTML5 Architect',
                client: 'Large Oil and Gas Provider - Houston, TX',
                description: 'HTML5 Proof of Concept.  Web application that provided for visualization of complex workflow and workstreams for project lifecycle management.  Utilized complex graphics drawing library for data visualizations.',
                clienttools: [
                    'Sencha ExtJS 4', 
                    'JQuery',
                    'JavaScript InfoVis Toolkit'
                ],
                servertools: [
                    'Microsoft .NET - C#', 
                    'Microsoft WCF'
                ]
        },
        { id: 'emspeed10', name: 'HTML5 Silverlight Application', 
            image: 'EMSPEED10.jpg', 
            thumb: '' ,
            dates: 'November 2011 - January 2012',
            role: 'Senior Web Architect',
            client: 'Large Oil and Gas Provider - Houston, TX',
            description: 'Architected and implemented a Web-based portal to a project management system.  The User Interface is based on a mix of ASP.NET and Microsoft Silverlight.  All interaction with the server is via AJAX calls to Microsoft Windows Communication Framework (WCF) services and SQL Server.',
            clienttools: [
                'ASP.NET', 
                'Microsoft Silverlight', 
                'JQuery'
            ],
            servertools: [
                'Microsoft .NET - C#', 
                'Microsoft WCF'
            ]
        },
        { id: 'nalco', name: 'ASP.NET Silverlight Web Application',
            image: 'NalcoEquip.jpg', 
            thumb: '' ,
            dates: 'September 2010 - October 2011',
            role: 'Senior Web Architect',
            client: 'Energy Technologies Company - Houston, TX',
            description: 'Designed and developed a client-facing SharePoint 2010 Refined Knowledge application, which allows for the monitoring of key refinery equipment at a client site and provides for real-time reporting and monitoring through custom-built SharePoint sites.  The application heavily utilizes Silverlight 4 for the user experience, and a back-end Pi database infrastructure from OSISoft.',
            clienttools: [
                'ASP.NET',
                'Silverlight', 
                'JQuery'   
            ],
            servertools: [
                'SharePoint 2010', 
                'Microsoft .NET - C#', 
                'Microsoft WCF' 
            ]
        },
        { id: 'lockheed', name: 'Silverlight SharePoint Web Application', 

            image: 'Scheduler.jpg', 
            thumb: '' ,
            dates: 'May 2010 - August 2010',
            role: 'Senior Web Architect',
            client: 'Defense Contractor - Norfolk, VA',
            description: 'Architected, designed and developed a SharePoint 2010 event management system which utilized a Silverlight 4 calendaring interface that was built with the Telerik Silverlight controls and the SharePoint Client Object model.  The application also takes advantage of the new SharePoint Relational list technology, and utilizes a Visual Studio - based Workflow to manage the life cycle of events.  ASP.NET, Silverlight, JQuery, JavaScript, SharePoint 2010, Microsoft .NET, C#, Microsoft WCF',
            clienttools: [
                'ASP.NET',
                'Microsoft Silverlight', 
                'JQuery'   
            ],
            servertools: [
                'SharePoint 2010', 
                'Microsoft .NET - C#', 
                'Microsoft WCF' 
            ]
        },
        { id: 'atlas', name: 'SharePoint Custom Search Web Application', 
            image: 'Atlas.jpg', 
            thumb: '' ,
            dates: 'January 2010 - April 2010',
            role: 'Senior Web Architect',
            client: 'Major Pharmaceutical Company - San Francisco, CA',
            description: 'Lead Architect for a custom SharePoint Search Web application against an OpenText/LiveLink document repository.  Defined and implemented the SharePoint search interface to OpenText/LiveLink, and designed and developed the custom search experience utilizing the Infragistics Silverlight grid control which provided for advanced sorting, grouping and column manipulation.',
            clienttools: [
                'ASP.NET',
                'Microsoft Silverlight', 
                'JQuery',
                'Visual Studio 2008', 
                'Infragistics controls'
            ],
            servertools: [
                'ASP.NET',
                'SharePoint 2007',
                'Microsoft .NET - C#', 
                'Microsoft WCF'
            ]
        },
        { id: 'emsix', name: 'ASP.NET/AJAX Web Application', 
            image: 'EMSIX.png', 
            thumb: '' ,
            dates: 'Oct 2009 - Dec 2009',
            role: 'Senior SharePoint Architect',
            client: 'Large Oil and Gas Provider - Houston, TX',
            description: 'Architected and implemented a Document Management System utilizing SharePoint Enterprise Search. The application utilized the SharePoint Profile System to provide for personalized search results. The display of search results utilized a custom faceted search experience, with result data displayed  in tabular format to allow for sorting.  An AJAX-enabled interface added to the custom search experience. The custom Search experience was created with custom Visual Studio controls.',
            clienttools: [
                'Visual Studio 2008', 
                'ASP.NET AJAX'
            ],
            servertools: [
                'ASP.NET',
                'SharePoint 2007',
                'SQL Server 2008',
                'Microsoft .NET - C#', 
                'Microsoft WCF'
            ]
        }
    ];
    $httpBackend.whenGET('http://gusmano.azurewebsites.net/api/projects').respond(projects);
    $httpBackend.whenGET(/^\/api\/project\/[\w]+$/).respond(function (method, url, data) {
        var theId = url.substring(url.lastIndexOf('/')+1);
        theObject = _.find(projects, function (rw) { return rw.id == theId });
        return [200, theObject];
    });

    var companies = [
        { id: 'hitachi', name: 'Hitachi Consulting', role: 'Senior Manager/Architect', dates: 'Oct 2009 - Present', description: 'Senior Manager with Hitachi Consulting based in the Houston office. Involved in assisting and mentoring clients in the development and implementation of solutions that utilize Microsoft SharePoint related technologies including ASP.NET and HTML5.'},
        { id: 'img', name: 'The Information Management Group', role: 'Partner', dates: 'Sept 1997 - Oct 2009', description: 'Partner and the Director of Emerging Technologies for The Information Management Group, a Microsoft Gold Certified Partner and the Worldwide 2001 Microsoft Certified Technical Education Center (CTEC) of the year. In this role, Mr. Gusmano was responsible for fostering an understanding of new and emerging technologies can be utilized for IMG and its clients.  In this position, Marc was  involved in Architecting applications for IMGâ€™s Consulting Services clients, as well as mentoring and training in client engagements.' },
        { id: 'bismarck', name: 'Bismarck Consulting', role: 'Founder', dates: 'March 1995 - Sept 1997', description: 'The Bismarck Group was a Client Server software product integration Firm headquartered in Chicago, Illinois.  The Firm\'s tag, \'Business Integration Services using Client Server Technologies\', highlighted the firm\'s focus: Providing Client Server software integration services to high growth, information-centric organizations and building solutions that can be sold as \'Customizable Software Products\'' },
        { id: 'lante', name: 'Lante Corporation', role: 'Director of Consulting', dates: 'Nov 1992 - March 1995', description: 'Mr. Gusmano started at Lante as Senior Consulting Manager and immediately began to get involved in many of the key clients for Lante, including Dell Computer, Abbott Labs, Baxter Healthcare, Sears, and Ameritech.  In  April of 1993 Marc was promoted to the position of Director of Consulting, responsible for the entire consulting organization at Lante, including all aspects of project execution, profit and loss (utilization) responsibility,  performance reviews,  recruiting,  and staffing.' },
        { id: 'andersen', name: 'Andersen Consulting', role: 'Manager', dates: 'May 1984 - Nov 1992', description: 'Mr. Gusmano began his consulting career as a staff consultant in the Chicago office of Arthur Andersen and Co./Andersen Consulting in May of 1984.  He spent his first 4 years on a variety of medium and large systems development projects for organizations such as IBM, Northern Trust Bank, Mellon Bank in Pittsburgh, and Lutheran General Hospital.  Mr. Gusmano was promoted to a Project Manager after just four years with Andersen Consulting, and moved to the Technology Services area where he became a project Manager for the New Age Systems group, a very specialized group within Andersen Consulting, focusing on assisting local Andersen offices with the planning, management, and deployment of client-server business applications.' }
    ];
    $httpBackend.whenGET('http://gusmano.azurewebsites.net/api/companies').respond(companies);
    $httpBackend.whenGET(/^\/api\/company\/[\w]+$/).respond(function (method, url, data) {
        var theId = url.substring(url.lastIndexOf('/')+1);
        theObject = _.find(projects, function (rw) { return rw.id == theId });
        return [200, theObject];
    });

    var technologies = [
        { id: '1', name: 'Ionic Framework' },
        { id: '1', name: 'Angular.js' },
        { id: '1', name: 'Cordova' },
        { id: '1', name: 'Angular.js Nested Routing (ui-router)' },
        { id: '1', name: '$httpbackend' },
        { id: '1', name: 'ng-cordova' },
        { id: '1', name: 'node.js' },
        { id: '1', name: 'gulp.js' },
        { id: '1', name: 'ASP.NET MVC WebApi' },
        { id: '1', name: 'Visual Studio 2013' },
        { id: '1', name: 'GITHub' },
        { id: '1', name: 'Bower' }
    ];
    $httpBackend.whenGET('http://gusmano.azurewebsites.net/api/technologies').respond(technologies);
    $httpBackend.whenGET(/^\/api\/technology\/[\w]+$/).respond(function (method, url, data) {
        var theId = url.substring(url.lastIndexOf('/') + 1);
        theObject = _.find(projects, function (rw) { return rw.id == theId });
        return [200, theObject];
    });


    //Major Midwest US Energy Company - Exelon Corporation
    //March 2009 - October 2009
    //Architected and led the development of a Site Ownership web part to gather site information from site administrators across SharePoint sites into a Central site directory.  This solution was implemented as a web part written utilizing Visual Studio 2008 and C#, and utilized the SharePoint Object Model to create a dynamic Site Ownership form from a view defined in the SharePoint site directory list - this allowed for dynamic creation of a form that displays any fields an administrator chooses to expose.  The web part also utilizes the SharePoint object model to allow for editing of the Site Directory from external SharePoint sites with no additional security needing to be applied.
    //Designed and constructed an Advanced Query solution that used the SharePoint Search object model to query against an Oracle database that utilized Business Data Services for its indexing.  The solution was implemented as a web part built with Microsoft .NET, AJAX and JavaScript to provide for an enhanced user experience, and displayed the returned results in a SharePoint Ã¢â‚¬ËœSPGridView, that provided for real time sorting and paging.  the Web Part was written utilizing Visual Studio 2008 and C#.

    //Midwest US Tool Manufacturer
    //October 2008 - March 2009
    //SharePoint 2007, Visual Studio 2008, Microsoft .NET Framework 3.5, C#

    //Argonne National Lab
    //March 2008 - October 2008
    //Architected and implemented the SharePoint components of Argonne National Labs next-generation Emergency Management software and tools, called Ã¢â‚¬ËœEMToolsÃ¢â‚¬â„¢ (http://www.dis.anl.gov/pubs/62348.pdf). This application included a Ã¢â‚¬Ëœ1-clickÃ¢â‚¬â„¢ installation, which automatically installed all parts of a SharePoint Solution; from creating the IIS Web Site, building the SharePoint Web Application, creating the Site Collection and Root Site based on a custom template, and adding user permissions. Also architected and implemented the back-end SharePoint / .NET custom extensibility components.
    //SharePoint 2007, Visual Studio 2008, Microsoft .NET Framework 3.5, C#

    //Midwest US Microsoft Solution Partner
    //October 2007 - March 2008
    //Designed and implemented a Microsoft Office SharePoint Server (MOSS)-based custom internet-facing site. The site contains customized master pages, utilizes MOSS Web Content Management pages with custom-built page layouts, contains custom-built C# Web Parts, and utilizes MOSS Excel Services and the Business Data Catalog.  A custom authentication provider that accesses the clients Microsoft Dynamics CRM 4.0 Contact entity was also developed for the site..
    //SharePoint 2007, Visual Studio 2005, Microsoft .NET Framework 3.0, C#

    //Midwest US Logistics Firm
    //May 2007 - October 2007
    //Architected and implemented custom authentication in a SharePoint/MOSS solution for a Chicago-based logistics firm. The implementation provided for the creation of a custom ASP.NET Forms Authentication Provider that retrieved credentials from a database hosted on an AS 400 platform.
    //SharePoint 2007, Visual Studio 2005, Microsoft .NET Framework 3.0, C#

}]);