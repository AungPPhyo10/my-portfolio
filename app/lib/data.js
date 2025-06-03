export const awards_lists = [
    {
        id: 1,
        title: "Director's Hounour Roll - Singapore Polytechnic",
        description: "Listed on School of Computing Director's Honour Roll in AY 2023-2024 and 2024-2025 with a cGPA of 3.82"
    },
    {
        id: 2,
        title: "Certificate in IOT - Singapore Polytechnic",
        description: "Awarded for completing IOT related modules and projects successfully"
    },
    {
        id: 3,
        title: "IELTS Certificate - Band 7.0",
        description: "Awarded for scoring a band score of 7 out 9 in IELTS exam"
    }
]

export const education_lists = [
    {
        id: 1,
        title: "Singapore Polytechnic",
        range: "2023 April - 2026 February",
        description: "Diploma in Information Technology(DIT)"
    },
    {
        id: 2,
        title: "ILBC Naypyitaw",
        range: "2021 June - 2022 May",
        description: "IGCSE (Edexcel) O-level"
    }
]

export const work_lists = [
    {
        id: 1,
        title: "Singapore Poly - Data Science Analytics Centre",
        range: "2025 April - 2026 February",
        description: "Internship",
    },
    {
        id: 2,
        title: "METRO Department Stores",
        range: "2023 May - 2026 March",
        description: "Part-time Sales Promoter",
    }
]

export const techs = [
    {id :1 , name: "Javascript", logo:"/logos/javascript.svg"},
    {id :2 , name: "Java", logo:"/logos/java.svg"},
    {id :3 , name: "Python", logo:"/logos/python.svg"},
    {id :4 , name: "HTML", logo:"/logos/html.svg"},
    {id :5 , name: "CSS", logo:"/logos/css.svg"},
    {id :6 , name: "Tailwind CSS", logo:"/logos/tailwindcss.svg"},
    {id :7 , name: "Bootstrap", logo:"/logos/bootstrap.svg"},
    {id :8 , name: "Node.js", logo:"/logos/nodejs.svg"},
    {id :9 , name: "React.js", logo:"/logos/reactjs.svg"},
    {id :10 , name: "Next.js", logo:"/logos/nextjs.svg"},
    {id :11 , name: "Jakarta EE", logo:"/logos/jakartaee.svg"},
    {id :12 , name: "SpringBoot", logo:"/logos/springboot.svg"},
    {id :13 , name: "Flask", logo:"/logos/flask.svg"},
    {id :14 , name: "Git", logo:"/logos/git.svg"},
    {id :15 , name: "Mendix", logo:"/logos/mendix.svg"},
    {id :16 , name: "Figma", logo:"/logos/figma.svg"},
    {id :17 , name: "MySQL", logo:"/logos/mysql.svg"},
    {id :18 , name: "Postgresql", logo:"/logos/postgresql.svg"},
    {id :19, name: "Docker", logo:"/logos/docker.svg"}
]

export const projects = [
    {
        id: 1, 
        title: "Full-stack Web Application",
        picture: "logos/nodejs.svg",
        techs: ["Node.js", "Express.js", "JWT Auth", "MySQL", "HTML", "CSS", "Bootstrap"],
        description: "A fantasy space RPG web application where users can build spaceships, do sustainable tasks and compete each other. The project involves creating routes, controllers, and models(MVC structure) to handle database queries integrating with user authentication with JWT token system and game logic.",
        github: (
            <div>
                Github repo link : <a href="https://hello.com" target="_blank"/>
            </div>
        ),
        link: (
            <div>
                View on live server : <a href="https://hello.com" target="_blank"/>
            </div>
        )
    },
    {
        id: 2, 
        title: "Movie app with React.js",
        picture: "logos/reactjs.svg",
        techs: ["Node.js", "React.js"],
        description: "A web app where you can freely search up movies, actors and set your own favourite movies. Built with React.js v19+. Project data retrieved from themoviedb.org APIs",
        github: (
            <div>
                Github repo link : <a href="https://hello.com" target="_blank"/>
            </div>
        ),
        link: (
            <div>
                View on live server : <a href="https://hello.com" target="_blank"/>
            </div>
        )
    },
    {
        id: 3, 
        title: "Next.js demo application",
        picture: "logos/nextjs.svg",
        techs: ["Node.js", "React.js", "Next.js"],
        description: "A demo next.js web application that utilizes both Server-Side Rendering(SSR) and Client-Side Rendering(CSR) and other advanced Next.js techniques. The project is a demo tutorial from Udemy course - Next.js and React 18 Bootcamp(by David Joseph Katz)",
        github: (
            <div>
                Github repo link : <a href="https://hello.com" target="_blank"/>
            </div>
        ),
        link: (
            <div>
                View on live server : <a href="https://hello.com" target="_blank"/>
            </div>
        )
    },
    {
        id: 4, 
        title: "E-Library system + CI/CD Pipeline",
        picture: "logos/nodejs.svg",
        techs: ["Node.js", "Prisma", "Playwright Testing", "Express.js", "JWT Auth", "Postgresql", "HTML", "CSS", "Bootstrap"],
        description: "A library e-book rental system project built by my team for the CICD module requirements. The project involves MVC structure, Prisma as ORM(Object Relational Model) and simulates a library book rental system with user authentication, book renting, returning, admin management, etc",
        github: (
            <div>
                Github repo link : <a href="https://hello.com" target="_blank"/>
            </div>
        ),
        link: (
            <div>
                View on live server : <a href="https://hello.com" target="_blank"/>
            </div>
        )
    },
    {
        id: 5, 
        title: "To-do-list web app with Flask",
        picture: "logos/flask.svg",
        techs: ["Flask", "HTML", "CSS", "Bootstrap"],
        description: "A simple web app built with python Flask, Jinjja templates for managing tasks and notes",
        github: (
            <div>
                Github repo link : <a href="https://hello.com" target="_blank"/>
            </div>
        ),
    },
    {
        id: 6, 
        title: "Portfolio website",
        picture: "logos/nextjs.svg",
        techs: ["Node.js", "Next.js", "React.js", "Daisy UI", "Motion-Primitives"],
        description: "My own portfolio website which is being used to host this current webpage",
        github: (
            <div>
                Github repo link : <a href="https://hello.com" target="_blank"/>
            </div>
        )
    },
    {
        id: 7, 
        title: "Gaming Community application prototype",
        picture: "logos/figma.svg",
        techs: ["Figma"],
        description: "A prototype application for the gaming community built with Figma. The project included conducting research on user needs, solving their needs, documentation, wireframe creation, and prototype development.",
        link: (
            <div>
                View prototype on Figma : <a href="https://hello.com" target="_blank"/>
            </div>
        )
    },
    {
        id: 8, 
        title: "Javascript Movie Review Program",
        picture: "logos/nodejs.svg",
        techs: ["Node.js", "Javascript"],
        description: "A simple command-line driven program where users can play around with existing movies, view details, add new movies, add ratings, etc",
        github: (
            <div>
                Github repo link : <a href="https://hello.com" target="_blank"/>
            </div>
        )
    },
    {
        id: 9, 
        title: "SG University Graduates Employment Survey Program - 1",
        picture: "logos/nodejs.svg",
        techs: ["Node.js", "Javascript"],
        description: "A command-line driven project that users can interact with to find out data about SG University Graduates employment survey details",
        github: (
            <div>
                Github repo link : <a href="https://hello.com" target="_blank"/>
            </div>
        )
    },
    {
        id: 10, 
        title: "SG University Graduates Employment Survey Program - 2",
        picture: "logos/nodejs.svg",
        techs: ["Node.js", "Javascript", "HTML", "CSS"],
        description: "A web application that users can interact with to find out about SG University Graduates employment rates, median salaries by majors, etc",
        github: (
            <div>
                Github repo link : <a href="https://hello.com" target="_blank"/>
            </div>
        )
    },
    {
        id: 11,
        title: "Low-code Gaming Community application with Mendix",
        picture: "logos/mendix.svg",
        techs: ["Mendix", "CSS"],
        description: "A prototype version of a gaming community application built with Mendix Studio Pro v9 and node-red. The app included basic page navigation, create/delete operation microflows, in-game chatbot(called via OpenAI endpoint), etc",
        link: (
            <div>
                View on demo video : <a href="https://hello.com" target="_blank"/>
            </div>
        )
    }
]