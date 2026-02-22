const jobs = [
  {
    company: "CloudSync Labs",
    role: "Frontend Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    desc: "Develop responsive user interfaces using React and Tailwind CSS."
  },
  {
    company: "NextGen Soft",
    role: "Backend Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$110,000 - $150,000",
    desc: "Build scalable REST APIs with Node.js and Express."
  },
  {
    company: "PixelCraft Studio",
    role: "UI/UX Designer",
    location: "San Francisco, CA",
    type: "Part-time",
    salary: "$70,000 - $95,000",
    desc: "Design modern and user-friendly product interfaces."
  },
  {
    company: "AI Core Systems",
    role: "Machine Learning Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$140,000 - $180,000",
    desc: "Develop ML models and integrate AI features into products."
  },
  {
    company: "SecureNet Ltd",
    role: "Cyber Security Analyst",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$115,000 - $145,000",
    desc: "Monitor systems and prevent security threats."
  },
  {
    company: "DevOps Hub",
    role: "DevOps Engineer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$120,000 - $155,000",
    desc: "Manage CI/CD pipelines and cloud infrastructure."
  },
  {
    company: "Startup Spark",
    role: "Junior JavaScript Developer",
    location: "Remote",
    type: "Internship",
    salary: "$40,000 - $60,000",
    desc: "Assist in building web applications and fixing bugs."
  },
  {
    company: "DataBridge Inc",
    role: "Database Engineer",
    location: "Denver, CO",
    type: "Full-time",
    salary: "$105,000 - $135,000",
    desc: "Design and optimize database architecture and queries."
  }
];
const interViewList = [];
const rejectedList = [];

const container = document.getElementById("jobContainer");
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');
const mainContainer = document.querySelector('main');
const jobsLength = document.querySelector('.jobsCount');
const jobsLengthAll = document.querySelector('.jobsCountAll');

jobsLength.innerText = jobs.length;
jobsLengthAll.innerText = `${jobs.length} Jobs`;

function calculateCount(){
const interViewCount = document.querySelector('.interviewCount');
const rejectedCount = document.querySelector('.rejectedCount');
interViewCount.innerText =interViewList.length;
rejectedCount.innerText =rejectedList.length;

}


// function toggleStyle(id){
//     const selected = document.getElementById(id);
//     const notAvailableJobs = document.querySelector('.notAvailableJobs');
    
//     allFilterBtn.classList.remove('bg-[#3b82f6FF]' ,'text-white');
//     interviewFilterBtn.classList.remove('bg-[#3b82f6FF]','text-white');
//     rejectedFilterBtn.classList.remove('bg-[#3b82f6FF]','text-white');
    
//     allFilterBtn.classList.add('bg-gray-300' ,'text-black');
//     interviewFilterBtn.classList.add('bg-gray-300','text-black');
//     rejectedFilterBtn.classList.add('bg-gray-300','text-black');
    

   

//     // if(!selected) return;

//     selected.classList.remove('bg-gray-300','text-black');
//     selected.classList.add('bg-[#3b82f6FF]','text-white');

//     // ✅ FIX filter logic
//     if(id =='interview-filter-btn'){
//       mainContainer.classList.add('hidden');
//       if(interViewList.length === 0){
        
//         notAvailableJobs.classList.remove('hidden');
//       }else{
//         mainContainer.classList.remove('hidden')
//       }
       
         
//      }
//     // else if (id== 'all-filter-btn'){
//     //     mainContainer.classList.remove('hidden');
//     //     notAvailableJobs.classList.add('hidden')
//     // }

   


// }

function toggleStyle(id){
    const selected = document.getElementById(id);
    const notAvailableJobs = document.querySelector('.notAvailableJobs');

    // reset style
    allFilterBtn.classList.remove('bg-[#3b82f6FF]' ,'text-white');
    interviewFilterBtn.classList.remove('bg-[#3b82f6FF]','text-white');
    rejectedFilterBtn.classList.remove('bg-[#3b82f6FF]','text-white');

    allFilterBtn.classList.add('bg-gray-300' ,'text-black');
    interviewFilterBtn.classList.add('bg-gray-300','text-black');
    rejectedFilterBtn.classList.add('bg-gray-300','text-black');

    selected.classList.remove('bg-gray-300','text-black');
    selected.classList.add('bg-[#3b82f6FF]','text-white');


    // 🔥 FILTER LOGIC

    if(id === 'interview-filter-btn'){
        container.classList.remove('hidden');

        if(interViewList.length === 0){
            container.classList.add('hidden');
            notAvailableJobs.classList.remove('hidden');
        }else{
            notAvailableJobs.classList.add('hidden');
        }
    }

    else if(id === 'rejected-filter-btn'){
        container.classList.remove('hidden');

        if(rejectedList.length === 0){
            container.classList.add('hidden');
            notAvailableJobs.classList.remove('hidden');
        }else{
            notAvailableJobs.classList.add('hidden');
        }
    }

    else if(id === 'all-filter-btn'){
        container.classList.remove('hidden');
        notAvailableJobs.classList.add('hidden');
    }
}

  mainContainer.addEventListener('click', function(event){
    if(event.target.classList.contains('interviewBtn')){
     const parentNode = (event.target.parentNode.parentNode);
    const companyname = parentNode.querySelector('.companyName').innerText;
    const jobRole = parentNode.querySelector('.jobRole').innerText;
    const jobLocation = parentNode.querySelector('.jobLocation').innerText;
    const jobDesc = parentNode.querySelector('.jobDesc').innerText;
    const interViewBtn = parentNode.querySelector('.interviewBtn').innerText;
    const rejectedBtn = parentNode.querySelector('.rejectedBtn').innerText;
    
    const jobInfo ={
      companyname,jobRole,jobLocation,jobDesc,interViewBtn,rejectedBtn
    }
  const interViewExist = interViewList.find(item => item.companyname == jobInfo.companyname);
  if(!interViewExist){
    interViewList.push(jobInfo)
  }
  calculateCount();
  renderInterView()
}else  if(event.target.classList.contains('rejectedBtn')){

     const parentNode = (event.target.parentNode.parentNode);
    const companyname = parentNode.querySelector('.companyName').innerText;
    const jobRole = parentNode.querySelector('.jobRole').innerText;
    const jobLocation = parentNode.querySelector('.jobLocation').innerText;
    const jobDesc = parentNode.querySelector('.jobDesc').innerText;
    const interViewBtn = parentNode.querySelector('.interviewBtn').innerText;
    const rejectedBtn = parentNode.querySelector('.rejectedBtn').innerText;
    
    const jobInfo ={
      companyname,jobRole,jobLocation,jobDesc,interViewBtn,rejectedBtn
    }
  const rejectedExist =rejectedList.find(item => item.companyname == jobInfo.companyname);
  if(!rejectedExist){
     rejectedList.push(jobInfo)
  }
  calculateCount();
  renderRejectedView()
}

 
})


// InterView RetriveCard 

function renderInterView() {
  // container.innerHTML = ''; 

  for (let job of interViewList) {
     console.log(job);
    const card = document.createElement('div'); 
   
    card.className = 'card flex border p-8 justify-between';
    
    card.innerHTML = `
   <div class = ' flex justify-between items-center'>
   <div>
    <h2 class="companyName font-bold text-lg text-gray-900">${job.companyname}</h2>
    <p class= "jobRole text-gray-600 mt-1">${job.role}</p>
   </div>
      <i class="fa-regular fa-trash-can"></i> 
   </div>
      <p class="jobLocation text-sm text-gray-500 mt-2">${job.jobLocation} • ${job.type} • ${job.salary}</p>
      <span class=" w-[120px] mt-2  text-sm">NOT APPLIED</span>
      <p  class="jobDesc mt-3 text-gray-600">${job.jobDesc}</p>
      <div class="mt-4 flex gap-3">
        <button  class="interviewBtn border border-green-500 text-green-600 px-4 py-1 rounded hover:bg-green-50">INTERVIEW</button>
        <button class="rejectedBtn border border-red-500 text-red-600 px-4 py-1 rounded hover:bg-red-50">REJECTED</button>
      </div>
    `;

    container.appendChild(card);
  }
}

// RejectedRetive Card 

function renderRejectedView() {
  // container.innerHTML = ''; 

  for (let job of rejectedList) {
    const card = document.createElement('div'); 
   
    card.className = 'card flex border p-8 justify-between';
    
    card.innerHTML = `
   <div class = ' flex justify-between items-center'>
   <div>
    <h2 class="companyName font-bold text-lg text-gray-900">${job.companyname}</h2>
    <p class= "jobRole text-gray-600 mt-1">${job.role}</p>
   </div>
      <i class="fa-regular fa-trash-can"></i> 
   </div>
      <p class="jobLocation text-sm text-gray-500 mt-2">${job.jobLocation} • ${job.type} • ${job.salary}</p>
      <span class=" w-[120px] mt-2  text-sm">NOT APPLIED</span>
      <p  class="jobDesc mt-3 text-gray-600">${job.jobDesc}</p>
      <div class="mt-4 flex gap-3">
        <button  class="interviewBtn border border-green-500 text-green-600 px-4 py-1 rounded hover:bg-green-50">INTERVIEW</button>
        <button class="rejectedBtn border border-red-500 text-red-600 px-4 py-1 rounded hover:bg-red-50">REJECTED</button>
      </div>
    `;

    container.appendChild(card);
  }
}




function renderJobs() {
  // container.innerHTML = ''; 

  for (let job of jobs) {
    const card = document.createElement('div'); 
   
    card.className = 'card flex border p-8 justify-between';
    
    card.innerHTML = `
   <div class = ' flex justify-between items-center'>
   <div>
    <h2 class="companyName font-bold text-lg text-gray-900">${job.company}</h2>
    <p class= "jobRole text-gray-600 mt-1">${job.role}</p>
   </div>
      <i class="fa-regular fa-trash-can"></i> 
   </div>
      <p class="jobLocation text-sm text-gray-500 mt-2">${job.location} • ${job.type} • ${job.salary}</p>
      <span class=" w-[120px] mt-2  text-sm">NOT APPLIED</span>
      <p  class="jobDesc mt-3 text-gray-600">${job.desc}</p>
      <div class="mt-4 flex gap-3">
        <button  class="interviewBtn border border-green-500 text-green-600 px-4 py-1 rounded hover:bg-green-50">INTERVIEW</button>
        <button class="rejectedBtn border border-red-500 text-red-600 px-4 py-1 rounded hover:bg-red-50">REJECTED</button>
      </div>
    `;

    container.appendChild(card);
  }
}

renderJobs();