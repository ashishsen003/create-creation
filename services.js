
    const services = [
      {
        id: 1,
        name: 'Web Development',
        description: 'We offer professional web development services...',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        pricing: {
          basic: '$500',
          standard: '$1000',
          premium: '$2000',
        },
        contact: {
          email: 'webdev@example.com',
          phone: '+1 (123) 456-7890',
        },
        caseStudies: [
          {
            title: 'E-commerce Website',
            description: 'Developed an online store for a client...',
            link: 'https://example.com/case-study1',
          },
          // Add more case studies as needed
        ],
        // Add more properties as needed
      },
      {
        id: 2,
        name: 'App Development',
        description: 'We specialize in mobile app development...',
        technologies: ['Swift', 'Java', 'Kotlin'],
        pricing: {
          basic: '$1500',
          standard: '$3000',
          premium: '$5000',
        },
        contact: {
          email: 'appdev@example.com',
          phone: '+1 (987) 654-3210',
        },
        caseStudies: [
          {
            title: 'Social Media App',
            description: 'Developed a popular social media app...',
            link: 'https://example.com/case-study3',
          },
          // Add more case studies as needed
        ],
        // Add more properties as needed
      },
      // Add more services as needed
      {
        id: 3,
        name: 'Board Development',
        description: 'Custom board development for electronics projects...',
        technologies: ['Arduino', 'Raspberry Pi', 'Microcontrollers'],
        pricing: {
          basic: '$800',
          standard: '$1500',
          premium: '$3000',
        },
        contact: {
          email: 'boards@example.com',
          phone: '+1 (555) 123-4567',
        },
        caseStudies: [
          {
            title: 'Home Automation System',
            description: 'Built a custom board for controlling home devices...',
            link: 'https://example.com/case-study5',
          },
          // Add more case studies as needed
        ],
        // Add more properties as needed
      },
      {
        id: 4,
        name: 'Website Maintenance',
        description: 'Ensure the smooth operation of your website...',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        pricing: {
          basic: '$200/month',
          standard: '$400/month',
          premium: '$800/month',
        },
        contact: {
          email: 'maintenance@example.com',
          phone: '+1 (777) 555-1234',
        },
        caseStudies: [
          {
            title: 'Business Website Maintenance',
            description: 'Provided ongoing maintenance for a corporate website...',
            link: 'https://example.com/case-study6',
          },
          // Add more case studies as needed
        ],
        // Add more properties as needed
      },
      {
        id: 5,
        name: 'App Maintenance',
        description: 'Keep your mobile app up-to-date and bug-free...',
        technologies: ['Swift', 'Java', 'Kotlin'],
        pricing: {
          basic: '$300/month',
          standard: '$600/month',
          premium: '$1200/month',
        },
        contact: {
          email: 'appmaintenance@example.com',
          phone: '+1 (888) 999-5555',
        },
        caseStudies: [
          {
            title: 'Food Delivery App Maintenance',
            description: 'Provided ongoing maintenance for a food delivery app...',
            link: 'https://example.com/case-study7',
          },
          // Add more case studies as needed
        ],
        // Add more properties as needed
      },
      // Add more services as needed
    ];
  
let body = document.getElementById("container")
let techheading = document.getElementById("techheading")
let search = document.getElementById("search")

// let search_input = document.getElementById("search_input")

  
search.addEventListener("input",()=>{
    let searched = services.filter((element)=>{
        if(element.name.toUpperCase().includes(search.value.toUpperCase())) {
            return element
        }
    })
    display(searched)
})





  function display (data){

    body.innerHTML = null
    data.forEach(element => {
        let div = document.createElement("div")

        let title = document.createElement("h1")
        title.innerText = element.name
        
        let desc = document.createElement("p")
        desc.innerText = element.description

        let tech_div = document.createElement("div")
        // let techHeading = document.createElement("ul")

        // techHeading.innerText = "Techstack :"
        // tech_div.append(techHeading)

        element.technologies.forEach((i)=>{
            let tech_list = document.createElement("li")
            tech_list.innerText = i
            
            techheading.append(tech_list)
        })
        
        let price = document.createElement("div")
        for(let key in element.pricing){
            let price_list = document.createElement("span")
            price_list.innerText = element.pricing[key]
            price.append(price_list)
        }
        
        let contact = document.createElement("div")
        for(let key in element.contact){
            let contact_list = document.createElement("span")
            contact_list.innerText = element.contact[key]
            contact.append(contact_list)
        }

        
        div.append(title,desc,techheading,price,contact)
        body.append(div)
    });
}
display(services)
