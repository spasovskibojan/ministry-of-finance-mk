import i18n from 'i18next'
import LangaugeDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from "react-i18next";
i18n.use(LangaugeDetector).use(initReactI18next).init({
    debug:true,
    fallbackLng:"mk",
    returnObjects:true,
    resources: {
        en:{
            translation: {
                global: {
                    readMore: "Read More",
                    readMoreJobs: "View all jobs",
                    more: "more",
                    less: "less",
                    home: "Home",
                    welcome:"Welcome",
                },
                greeting: "Welcome to the Ministry of Finance",
                greetingSubtitle:"Your trusted partner in fiscal policy and economic development.",
                nav: {
                    line1:"Ministry",
                    line2:"News",
                    line3:"Resources",
                    line4:"Services",
                    line5:"Contact",
                    subItems: {
                        minister: "Minister",
                        deputyMinister: "Deputy Minister",
                        statistics: "Statistics",
                        reforms: "Reforms",
                        projects: "Projects",
                        publicationsAndPosts: "Publications and Posts",
                        publicAcquisitions: "Public Acquisitions",
                        laws: "Laws",
                        jobs: "Jobs",
                        support: "Support",
                        development: "Development",
                        eQuestions: "E-Questions",
                        subsidies: "Subsidies",
                        team: "Team"
                    }
                },
                news: {
                    homeNewsTitle: "Recent News",
                    otherNewsTitle: "News",
                    viewAllNews: "View All News",
                    newsPageTitle:"Welcome to the News Page",
                    newsPageSubtitle:"Explore the latest news and updates.",
                },
                fiscalCounter: {
                    head1: "Fiscal Counter",
                    counterItems:{
                        i1:{
                            Header:"Incomes",
                            p1:"Realization",
                            p2:"150,000",
                            p3:"MKD",
                            p4:"01/07/2024",
                        },
                        i2:{
                            Header:"Expenditures",
                            p1:"Realization",
                            p2:"120,000",
                            p3:"MKD",
                            p4:"01/07/2024",
                        },
                        i3:{
                            Header:"Budget",
                            p1:"Realization",
                            p2:"200,000",
                            p3:"MKD",
                            p4:"01/07/2024",
                        },
                        i4:{
                            Header:"Debt",
                            p1:"Realization",
                            p2:"50,000",
                            p3:"MKD",
                            p4:"01/07/2024",
                        },
                    }
                },
                infoCards:{
                    c1:{
                        link:"Statistics",
                        text:"Detailed statistical data and analysis."
                    },
                    c2:{
                        link:"Reforms",
                        text:"Information about ongoing and upcoming reforms."
                    },
                    c3:{
                        link:"Projects",
                        text:"Current and completed projects by the ministry."
                    },
                    c4:{
                        link:"Publications and posts",
                        text:"Official publications and posts from the ministry."
                    },
                },
                infoSections:{
                    h1:"About Ministry",
                    h2:"Laws",
                    h3:"Public Acquisitions",
                },
                ministerProfile:{
                    name:"Gordana Dimitrieska Kocoska",
                    role:"Minister of Finance"
                },
                mojDDV:{
                    h3:"Мy tax, my savings!",
                    p1:"My tax, my savings! Scan fiscal receipts and get a 20% VAT refund for purchased Macedonian goods and services, ie 10% for other goods and services through the application #МојДДВ.",
                    p2:"With this, we enable all citizens to make a refund of the VAT they pay and we directly contribute to returning the money back to the citizens."
                },
                footer:{
                    part1:{
                        p1:"Ministry of Finance",
                        p2:"Dame Gruev 12, 1000 Skopje",
                        p3:"Republic of Macedonia",
                        p4:"Tel: +389 2 3255-300",
                        p5:"Fax: +389 2 3255-721",
                        p6:"finance@finance.gov.mk"
                    },
                    part2:{
                        h1:"Institutions:",
                        p1:"Government",
                        p2:"Customs Administration",
                        p3:"UJP",
                        p4:"Financial Police",
                        p5:"BJN"
                    },
                    part3:{
                        h1:"Fast Links:",
                        p1:"E-Services",
                        p2:"Public relations",
                        p3:"Jobs",
                        p4:"Contact",
                        p5:"Archive",
                        p6:"SEFF"
                    },
                    credentials:"2024. All rights Reserved"
                },
                ministry:{
                    title:"Welcome to the Ministry page",
                    subtitle:"Find out what our responsibilities are",
                    h2:"Ministry of Finance performs activities pertaining to the following:",
                    ul:{
                        li1:"system of financing;",
                        li2:"treasury system;",
                        li3:"customs system;",
                        li4:"tax system and tax policy;",
                        li5:"system of foreign exchange operations;",
                        li6:"system of banks and saving houses and other financial institutions",
                        li7:"accounting system, auditing system and payment operations;",
                        li8:"loans and credits;",
                        li9:"macroeconomic policy and policy on development of the national economy",
                        li10:"preparation of balance of payments projections;",
                        li11:"preparation and monitoring of macroeconomic balance;",
                        li12:"property and casualty insurance;",
                        li13:"games of chance;",
                        li14:"preparation and execution of the Budget of the Republic of Macedonia and of the Annual Report of the Budget of the Republic of Macedonia",
                        li15:"ownership and other property and legal relations;",
                        li16:"commodity reserves;",
                        li17:"supervision under its competence and",
                        li18:"other activities stipulated by law.",
                    }
                },
                resourcePage:{
                    heroTitle:"Resource Hub",
                    heroSubtitle:"Explore Our Comprehensive Range of Resources",
                    h1:"Links",
                    l1:"Statistics",
                    l2:"Reforms",
                    l3:"Projects",
                    l4:"Publications and posts",
                    l5:"Public acquisitions",
                    l6:"Laws",
                },
                jobs:{
                    browseJobs: "Browse Jobs",
                    addJob: "Add new job",
                    backJob: "Back to Job Listings",
                    jobDesc:"Job Description",
                    salary:"Salary",
                    year:" / Year",
                    company:"Company Info",
                    mail:"Contact Email:",
                    phone:"Contact Phone:",
                    manageJob:"Manage Job",
                    editJob:"Edit Job",
                    deleteJob:"Delete Job",
                    updateJob:"Update job",
                    type:"Job Type",
                    listingName:"Job Listing Name",
                    description:"Description",
                    location:"Location",
                    companyName: "Company Name",
                    companyDesc:"Company Description",
                    forms:{
                        fullTime:"Full-Time",
                        partTime:"Part-Time",
                        remote:"Remote",
                        internship:"Internship",
                        label1:"eg. Unity Game Developer",
                        label2:"Add any job duties, expectations, requirements, etc",
                        s1:"Under $50K",
                        s2:"Over $200K",
                        compLocation:"Company Location",
                        compName:"Company Name",
                        compDesc:"What does your company do?",
                        emailApplicants:"Email address for applicants",
                        phoneApplicants:"Optional phone for applicants"
                    }
                },
                contact:{
                    title:"Contact",
                    h1:"Contact the Ministry",
                    p1:"Ministry of Finance",
                    p2:"Dame Gruev 12",
                    p3:"1000 Skopje, Republic of Macedonia",
                    p4:"Tel: + 389 2 3255-300",
                    p5:"Fax: + 389 2 3255-721",
                    p6:"You can find contacts from several departments in the ministry",
                    p7:"here",
                    l1:"Name",
                    l2:"Surname",
                    l3:"E-Mail",
                    l4:"Subject",
                    l5:"Message",
                    b:"Send",
                },
                resourcesTitles:{
                    statistics:"statistics",
                    reforms:"reforms",
                    projects:"projects",
                    "publications-and-posts":"publications and posts",
                    "public-acquisitions":"public acquisitions",
                    laws:"laws"
                },
                servicesPage:{
                    title:"Services Page",
                    subtitle:"Explore all the services we offer",
                    l1:"Е-OBLIGATIONS",
                    l2:"Е-CIRCULAR",
                    l3:"E-AUCTIONS",
                    l4:"FAMA",
                    l5:"Еlectronic system for Reporting and recording obligations",
                    l6:"E-JUDGES",
                    otherServices:"Е-Services",
                },
                contactTeam:{
                    title:"Contact Team",
                    subtitle:"Here is the information of our Team",
                    head1:"State Secretary",
                    paragraph1:{
                        p1: "Jelena Tast",
                    },
                    head2:"Councilors of State",
                    paragraph2:{
                        p1:"Susana Peneva",
                        d:"State adviser on issues of international finance and harmonization with the EU, and decentralized financial management of EU funds"
                    },
                    paragraph3:{
                        p1:"Jellal Ramadani",
                        d:"State adviser in the area of ​​strategic planning"
                    },
                    paragraph4:{
                        p1:"Liliana Gjurovska",
                        d:"State adviser on issues in the field of treasury operations"
                    },
                    paragraph5:{
                        p1:"Nevzat Velii",
                        d:"State adviser on issues in the field of treasury operations "
                    },
                },
                signInPart:{
                    signIn: "Sign In",
                    emailPlaceholder:"Email...",
                    passwordPlaceholder:"Password...",
                    signOut:"Sign Out",
                    signOutAlert:"You have just logged out",
                    signInAlert:"Successful sign in",
                    googleSignInAlert:"Successful sign in using Google",
                    signUpAlert:"Successful registration",
                    signUp:"Register",
                    signInWithGoogle:"Sign In with Google"
                },
            }
        },

      // ----------------------------------------------------------
      // ----------------------------------------------------------
      // ----------------------------------------------------------

        mk:{
            translation: {
                global: {
                    readMore: "Види повеќе",
                    readMoreJobs: "Сите огласи",
                    more: "повеќе",
                    less: "помалку",
                    browseJobs: "Работни места",
                    addJob: "Додај ново работно место",
                    home: "Почетна",
                    welcome:"Добредојде",
                },
                greeting: "Добредојдовте во Министерството за Финансии",
                greetingSubtitle:"Вашиот верен партнер во фискалната политика и економскиот развој.",
                nav: {
                    line1:"Министерство",
                    line2:"Вести",
                    line3:"Ресурси",
                    line4:"Услуги",
                    line5:"Контакт",
                    subItems: {
                        minister: "Министер",
                        deputyMinister: "Заменик Министер",
                        statistics: "Статистика",
                        reforms: "Реформи",
                        projects: "Проекти",
                        publicationsAndPosts: "Публикации и објави",
                        publicAcquisitions: "Јавни набавки",
                        laws: "Закони",
                        jobs: "Вработување",
                        support: "Поддршка",
                        development: "Развој",
                        eQuestions: "Е-Прашања",
                        subsidies: "Субвенции",
                        team: "Тим"
                    }
                },
                news: {
                    homeNewsTitle: "Најнови вести",
                    otherNewsTitle: "Вести",
                    viewAllNews: "сите вести",
                    newsPageTitle:"Добредојде на страната за Вести",
                    newsPageSubtitle:"Бидете во тек со најновите вести и новости.",
                },
                fiscalCounter: {
                    head1: "Фискален бројач",
                    counterItems:{
                        i1:{
                            Header:"Приходи",
                            p1:"Реализација",
                            p2:"150,000",
                            p3:"МКД",
                            p4:"01/07/2024",
                        },
                        i2:{
                            Header:"Трошоци",
                            p1:"Реализација",
                            p2:"120,000",
                            p3:"МКД",
                            p4:"01/07/2024",
                        },
                        i3:{
                            Header:"Буџет",
                            p1:"Реализација",
                            p2:"220,000",
                            p3:"МКД",
                            p4:"01/07/2024",
                        },
                        i4:{
                            Header:"Долг",
                            p1:"Реализација",
                            p2:"50,000",
                            p3:"МКД",
                            p4:"01/07/2024",
                        },
                    }
                },
                infoCards:{
                    c1:{
                        link:"Статистика",
                        text:"Детални статистички податоци и анализа."
                    },
                    c2:{
                        link:"Реформи",
                        text:"Информации за тековните и претстојните реформи."
                    },
                    c3:{
                        link:"Проекти",
                        text:"Тековни и завршени проекти од страна на министерството."
                    },
                    c4:{
                        link:"Публикации и објави",
                        text:"Официјални публикации и објави од министерството."
                    },
                },
                infoSections:{
                    h1:"За министерството",
                    h2:"Закони",
                    h3:"Јавни набавки",
                },
                ministerProfile:{
                    name:"Гордана Димитриеска Кочоска",
                    role:"Министер за финансии"
                },
                mojDDV:{
                    h3:"Мој данок, моја заштеда!",
                    p1:"Мој данок, моја заштеда! Скенирај фискални сметки и добиј 20% поврат на ДДВ за купените македонски добра и услуги односно 10% за останатите добра и услуги преку апликацијата #МојДДВ.",
                    p2:"Со ова на сите граѓани им овозможуваме да направат поврат на ДДВ-то кое го плаќаат и директно придонесуваме кон враќање на парите назад кон граѓаните."
                },
                footer:{
                    part1:{
                        p1:"Министерство за Финансии",
                        p2:"Даме Груев бр.12, 1000 Скопје",
                        p3:"Република Македонија",
                        p4:"Тел: +389 2 3255-300",
                        p5:"Факс: +389 2 3255-721",
                        p6:"finance@finance.gov.mk"
                    },
                    part2:{
                        h1:"Институции:",
                        p1:"Влада",
                        p2:"Царинска управа",
                        p3:"УЈП",
                        p4:"Финансиска полиција",
                        p5:"БЈН"
                    },
                    part3:{
                        h1:"Брзи линкови:",
                        p1:"Е-сервиси",
                        p2:"Односи со јавност",
                        p3:"Вработувања",
                        p4:"Контакт",
                        p5:"Архива",
                        p6:"SEFF"
                    },
                    credentials:"2024. Сите права задржани"
                },
                ministry:{
                    title:"Добредојде на страната на Министерството",
                    subtitle:"Дознајте кои се нашите обврски",
                    h2:"Министерството за финансии врши работи кои се однесуваат на следново:",
                    ul:{
                        li1:"систем на финансирање;",
                        li2:"трезорски систем;",
                        li3:"царински систем;",
                        li4:"даночен систем и даночна политика;",
                        li5:"систем на девизно работење;",
                        li6:"систем на банки и штедилници и други финансиски институции",
                        li7:"сметководствен систем, систем за ревизија и платен промет;",
                        li8:"заеми и кредити;",
                        li9:"макроекономска политика и политика за развој на националната економија",
                        li10:"подготовка на проекции на платниот биланс;",
                        li11:"подготовка и следење на макроекономската рамнотежа;",
                        li12:"осигурување на имот и жртви;",
                        li13:"игри на среќа;",
                        li14:"изготвување и извршување на Буџетот на Република Македонија и на Годишниот извештај на Буџетот на Република Македонија",
                        li15:"сопственост и други имотно-правни односи;",
                        li16:"стокови резерви;",
                        li17:"надзор од негова надлежност и",
                        li18:"други работи утврдени со закон.",
                    }
                },
                resourcePage:{
                    heroTitle:"Ресурси",
                    heroSubtitle:"Истражете го нашиот сеопфатен опсег на ресурси",
                    h1:"Врски",
                    l1:"Статистика",
                    l2:"Реформи",
                    l3:"Проекти",
                    l4:"Публикации и објави",
                    l5:"Јавни набавки",
                    l6:"Закони",
                },
                jobs:{
                    browseJobs: "Огласи",
                    addJob: "Додај оглас",
                    backJob: "Назад на огласи за работни места",
                    jobDesc:"Опис на работното место",
                    salary:"Плата",
                    year:" / Година",
                    company:"Компанија",
                    mail:"Е-пошта",
                    phone:"Телефон:",
                    manageJob:"Работно место",
                    editJob:"Уреди",
                    deleteJob:"Избриши",
                    updateJob:"Промени оглас",
                    type:"Тип на работа",
                    listingName:"Оглас",
                    description:"Опис",
                    location:"Локација",
                    companyName: "Име на компанија",
                    companyDesc:"Опис на компанија",
                    forms:{
                        fullTime:"Полно работно време",
                        partTime:"Скратено работно време",
                        remote:"Од далечина",
                        internship:"Пракса",
                        label1:"пр. Unity Game Developer",
                        label2:"Наведи некој работни обврски, очекувања, потреби и сл.",
                        s1:"Под $50K",
                        s2:"Над $200K",
                        compLocation:"Локација на компанијата",
                        compName:"Име на компанијата",
                        compDesc:"Што прави твојата компанија?",
                        emailApplicants:"Е-пошта за апликанти",
                        phoneApplicants:"Телефон за апликанти"
                    }
                },
                contact:{
                    title:"Контакт",
                    h1:"Контактирај го министерството",
                    p1:"Министерство за финансии",
                    p2:"Даме Груев  бр.12",
                    p3:"1000 Скопје, Република Македонија",
                    p4:"Тел: + 389 2 3255-300",
                    p5:"Факс: + 389 2 3255-721",
                    p6:"Контакти од повеќе сектори во министерството може да ги најдете",
                    p7:"тука",
                    l1:"Име",
                    l2:"Презиме",
                    l3:"Е-пошта",
                    l4:"Предмет",
                    l5:"Порака",
                    b:"Прати",
                },
                resourcesTitles:{
                    statistics:"статистика",
                    reforms:"реформи",
                    projects:"проекти",
                    "publications-and-posts":"публикации и објави",
                    "public-acquisitions":"јавни набавки",
                    laws:"закони"
                },
                servicesPage:{
                    title:"Услуги",
                    subtitle:"Истражете ги услугите што ги нудиме",
                    l1:"Е-ОБВРСКИ",
                    l2:"Е-ЦИРКУЛАР",
                    l3:"E-АУКЦИИ",
                    l4:"ФАМА",
                    l5:"Електронски Систем за Пријавување и евиденција на обврски",
                    l6:"E-ПРЕСУДИ",
                    otherServices:"Е-Сервиси",
                },
                contactTeam:{
                    title:"Контакт тим",
                    subtitle:"Информации за нашиот тим",
                    head1:"Државен секретар",
                    paragraph1:{
                        p1: "Јелена Таст",
                    },
                    head2:"Државни советници",
                    paragraph2:{
                        p1:"Сузана Пенева",
                        d:"Државен советник за прашања од меѓународните финансии и хармонизација со ЕУ, и децентрализирано финансиско управување со ЕУ фондовите"
                    },
                    paragraph3:{
                        p1:"Џелал Рамадани",
                        d:"Државен советник во областа за стратешко планирање"
                    },
                    paragraph4:{
                        p1:"Лилјана Ѓуровска",
                        d:"Државен советник за прашања од областа на трезорското работење"
                    },
                    paragraph5:{
                        p1:"Невзат Велии",
                        d:"Државен советник за прашања од областа на трезорското работење"
                    },
                },
                signInPart:{
                    signIn: "Најава",
                    signInWithGoogle: "Најавa со Google",
                    logout: "Одјава",
                    emailPlaceholder:"Е-пошта...",
                    passwordPlaceholder:"Лозинка...",
                    signOut:"Одјави се",
                    signOutAlert:"Штотуку се одјавивте",
                    signInAlert:"Успешна најава",
                    googleSignInAlert:"Успешна најава преку Google",
                    signUpAlert:"Успешна регистрација",
                    signUp:"Регистрација",
                },

            }
        }
    }
})