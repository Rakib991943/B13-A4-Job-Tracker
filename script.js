const jobs = [
  {
    company: "Mobile First Corp",
    role: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    desc: "Build cross-platform mobile applications using React Native."
  },
  {
    company: "WebFlow Agency",
    role: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    desc: "Create stunning web experiences for high-profile clients."
  },
  {
    company: "DataViz Solutions",
    role: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    desc: "Transform complex data into compelling visualizations."
  },
  {
    company: "DataViz Solutions",
    role: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    desc: "Transform complex data into compelling visualizations."
  },
  {
    company: "Mobile First Corp",
    role: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    desc: "Build cross-platform mobile applications using React Native."
  },
{
    company: "WebFlow Agency",
    role: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 - $120,000",
    desc: "Create stunning web experiences for high-profile clients."
  },
  {
    company: "Mobile First Corp",
    role: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 - $175,000",
    desc: "Build cross-platform mobile applications using React Native."
  },
   {
    company: "DataViz Solutions",
    role: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $165,000",
    desc: "Transform complex data into compelling visualizations."
  },
 
];

const container = document.getElementById("jobContainer");
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-btn');
const rejectedFilterBtn = document.getElementById('rejected-btn');
function toggleStyle(id){
    const selected = document.getElementById(id);
    allFilterBtn.classList.remove('bg-[#3b82f6FF]' ,'text-white');
    interviewFilterBtn.classList.remove('bg-[#3b82f6FF]','text-white');
    rejectedFilterBtn.classList.remove('bg-[#3b82f6FF]','text-white');
    
    allFilterBtn.classList.add('bg-gray-300' ,'text-black');
    interviewFilterBtn.classList.add('bg-gray-300','text-black');
    rejectedFilterBtn.classList.add('bg-gray-300','text-black');

    // allFilterBtn.classList.add('bg-gray-200','text-black');
    // thrivingFilterBtn.classList.add('bg-gray-200','text-black');
    // strugglingFilterBtn.classList.add('bg-gray-200','text-black');

    if(!selected) return;

    selected.classList.remove('bg-gray-300','text-black');
    selected.classList.add('bg-[#3b82f6FF]','text-white');

    // // ✅ FIX filter logic
    // if(id =='thriving-filter-btn'){
    //     filteredSection.classList.remove('hidden');
    //     allcards.classList.add('hidden');

    // }else if (id== 'all-filter-btn'){
    //     filteredSection.classList.remove('hidden');
    //     allcards.classList.remove('hidden');
    // }
}



function renderJobs() {
  container.innerHTML = ''; 

  for (let job of jobs) {
    const card = document.createElement('div'); 
   
    card.className = 'card flex border p-8 justify-between';
    
    card.innerHTML = `
   <div class = 'flex justify-between items-center'>
   <div>
    <h2 class="font-bold text-lg text-gray-900">${job.company}</h2>
    <p class="text-gray-600 mt-1">${job.role}</p>
   </div>
      <i class="fa-regular fa-trash-can"></i> 
   </div>
      <p class="text-sm text-gray-500 mt-2">${job.location} • ${job.type} • ${job.salary}</p>
      <span class=" w-[120px] bg-blue-100 text-blue-700 px-3 py-1 rounded mt-3 text-sm">NOT APPLIED</span>
      <p class="mt-3 text-gray-600">${job.desc}</p>
      <div class="mt-4 flex gap-3">
        <button class="border border-green-500 text-green-600 px-4 py-1 rounded hover:bg-green-50">INTERVIEW</button>
        <button class="border border-red-500 text-red-600 px-4 py-1 rounded hover:bg-red-50">REJECTED</button>
      </div>
    `;

    container.appendChild(card);
  }
}

renderJobs();