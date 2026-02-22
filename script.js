// ===== JOB DATA =====
const jobs = [
  { company: "CloudSync Labs", role: "Frontend Developer", status: "Remote", desc: "Develop responsive user interfaces using React and Tailwind CSS." },
  { company: "NextGen Soft", role: "Backend Developer", status: "New York, NY", desc: "Build scalable REST APIs with Node.js and Express." },
  { company: "PixelCraft Studio", role: "UI/UX Designer", status: "San Francisco, CA", desc: "Design modern and user-friendly product interfaces." },
  { company: "AI Core Systems", role: "Machine Learning Engineer", status: "Austin, TX", desc: "Develop ML models and integrate AI features into products." },
  { company: "SecureNet Ltd", role: "Cyber Security Analyst", status: "Chicago, IL", desc: "Monitor systems and prevent security threats." },
  { company: "DevOps Hub", role: "DevOps Engineer", status: "Seattle, WA", desc: "Manage CI/CD pipelines and cloud infrastructure." },
  { company: "Startup Spark", role: "Junior JavaScript Developer", status: "Remote", desc: "Assist in building web applications and fixing bugs." },
  { company: "DataBridge Inc", role: "Database Engineer", status: "Denver, CO", desc: "Design and optimize database architecture and queries." }
];

// ===== LISTS =====
const interViewList = [];
const rejectedList = [];

// ===== DOM ELEMENTS =====
const container = document.getElementById("jobContainer");
const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');
const mainContainer = document.querySelector('main');
const renderInterView = document.querySelector('.interviewRender');
const renderRejected = document.querySelector('.rejectedRender');
const notAvailableJobs = document.querySelector('.notAvailableJobs');
const jobsLength = document.querySelector('.jobsCount');
const jobsLengthAll = document.querySelector('.jobsCountAll');

// ===== INITIAL COUNTS =====
jobsLength.innerText = jobs.length;
jobsLengthAll.innerText = jobs.length + " Jobs";

// ===== COUNT FUNCTION =====
function calculateCount() {
    document.querySelector('.interviewCount').innerText = interViewList.length;
    document.querySelector('.rejectedCount').innerText = rejectedList.length;
}

// ===== TOGGLE FILTER BUTTON STYLE =====
function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-[#3b82f6FF]', 'text-white'); allFilterBtn.classList.add('bg-gray-300','text-black');
    interviewFilterBtn.classList.remove('bg-[#3b82f6FF]', 'text-white'); interviewFilterBtn.classList.add('bg-gray-300','text-black');
    rejectedFilterBtn.classList.remove('bg-[#3b82f6FF]', 'text-white'); rejectedFilterBtn.classList.add('bg-gray-300','text-black');

    const selected = document.getElementById(id);
    selected.classList.remove('bg-gray-300','text-black');
    selected.classList.add('bg-[#3b82f6FF]', 'text-white');

    if(id === 'all-filter-btn') {
        container.classList.remove('hidden');
        renderInterView.classList.add('hidden');
        renderRejected.classList.add('hidden');
        notAvailableJobs.classList.add('hidden');
    }
    if(id === 'interview-filter-btn') {
        container.classList.add('hidden');
        renderRejected.classList.add('hidden');
        if(interViewList.length === 0) {
            renderInterView.classList.add('hidden');
            notAvailableJobs.classList.remove('hidden');
        } else {
            renderInterView.classList.remove('hidden');
            notAvailableJobs.classList.add('hidden');
        }
    }
    if(id === 'rejected-filter-btn') {
        container.classList.add('hidden');
        renderInterView.classList.add('hidden');
        if(rejectedList.length === 0) {
            renderRejected.classList.add('hidden');
            notAvailableJobs.classList.remove('hidden');
        } else {
            renderRejected.classList.remove('hidden');
            notAvailableJobs.classList.add('hidden');
        }
    }
}

// ===== CLICK EVENTS (PARENTNODE) =====
// mainContainer.addEventListener('click', function(event) {
//     // ===== INTERVIEW BUTTON =====
//     if(event.target.classList.contains('interviewBtn')) {
//         const card = event.target.parentNode.parentNode; // parentNode ব্যবহার করে parent card

//         const jobInfo = {
//             companyname: card.querySelector('.companyName').innerText,
//             jobRole: card.querySelector('.jobRole').innerText,
//             jobLocation: card.querySelector('.jobLocation').innerText,
//             jobDesc: card.querySelector('.jobDesc').innerText
//         };

//         // ✅ simple loop for duplicate check
//         let exist = false;
//         for(let i=0; i<interViewList.length; i++){
//             if(interViewList[i].companyname === jobInfo.companyname){
//                 exist = true;
//                 break;
//             }
//         }
//         if(!exist){
//             interViewList.push(jobInfo);
//         }


//         calculateCount();
//         renderInterViews();


//  // DELETE BUTTON (trash icon)
//     if(target.classList.contains('fa-trash-can')){
//         const card = target.parentNode; // icon -> outer flex div
//         const companyName = card.querySelector('.companyName').innerText;

//         // Remove from interview list
//         for(let i=0; i<interViewList.length; i++){
//             if(interViewList[i].companyname === companyName){
//                 interViewList.splice(i, 1);
//                 break;
//             }
//         }

//         // Remove from rejected list
//         for(let i=0; i<rejectedList.length; i++){
//             if(rejectedList[i].companyname === companyName){
//                 rejectedList.splice(i, 1);
//                 break;
//             }
//         }

//         // Remove from DOM
//         card.parentNode.removeChild(card);

//         // Update counts
//         calculateCount();
//     }




//     }

//     // ===== REJECTED BUTTON =====
//     if(event.target.classList.contains('rejectedBtn')) {
//         const card = event.target.parentNode.parentNode; // parentNode ব্যবহার করে parent card

//         const jobInfo = {
//             companyname: card.querySelector('.companyName').innerText,
//             jobRole: card.querySelector('.jobRole').innerText,
//             jobLocation: card.querySelector('.jobLocation').innerText,
//             jobDesc: card.querySelector('.jobDesc').innerText
//         };

//         let exist = false;
//         for(let i=0; i<rejectedList.length; i++){
//             if(rejectedList[i].companyname === jobInfo.companyname){
//                 exist = true;
//                 break;
//             }
//         }
//         if(!exist){
//             rejectedList.push(jobInfo);
//         }

//         calculateCount();
//         renderRejectedViews();
//     }
// });

mainContainer.addEventListener('click', function(event) {
    const target = event.target; // ✅ সব button/ icon এর জন্য

    // ===== INTERVIEW BUTTON =====
    if(target.classList.contains('interviewBtn')) {
        const card = target.parentNode.parentNode; // parent div -> flex div
        const jobInfo = {
            companyname: card.querySelector('.companyName').innerText,
            jobRole: card.querySelector('.jobRole').innerText,
            jobLocation: card.querySelector('.jobLocation').innerText,
            jobDesc: card.querySelector('.jobDesc').innerText
        };
        if(!interViewList.some(item => item.companyname === jobInfo.companyname)){
            interViewList.push(jobInfo);
        }
        calculateCount();
        renderInterViews();
    }

    // ===== REJECTED BUTTON =====
    if(target.classList.contains('rejectedBtn')) {
        const card = target.parentNode.parentNode;
        const jobInfo = {
            companyname: card.querySelector('.companyName').innerText,
            jobRole: card.querySelector('.jobRole').innerText,
            jobLocation: card.querySelector('.jobLocation').innerText,
            jobDesc: card.querySelector('.jobDesc').innerText
        };
        if(!rejectedList.some(item => item.companyname === jobInfo.companyname)){
            rejectedList.push(jobInfo);
        }
        calculateCount();
        renderRejectedViews();
    }

    // ===== DELETE BUTTON =====
    if(target.classList.contains('fa-trash-can')){
        const card = target.parentNode.parentNode; // icon -> outer flex div -> card
        const companyName = card.querySelector('.companyName').innerText;

        // Remove from interview list
        for(let i=0; i<interViewList.length; i++){
            if(interViewList[i].companyname === companyName){
                interViewList.splice(i,1);
                break;
            }
        }

        // Remove from rejected list
        for(let i=0; i<rejectedList.length; i++){
            if(rejectedList[i].companyname === companyName){
                rejectedList.splice(i,1);
                break;
            }
        }

        // Remove card from DOM
        card.parentNode.removeChild(card);

        // Update counts
        calculateCount();
    }
});

// ===== CREATE CARD =====
function createCard(job){
    const card = document.createElement('div');
    card.className = 'card flex border p-8 justify-between mb-5';

    card.innerHTML = `
        <div class ='flex justify-between'>
        <div>
            <h2 class="companyName font-bold text-lg">${job.companyname || job.company}</h2>
            <p class="jobRole text-gray-600">${job.jobRole || job.role}</p>
            <p class="jobLocation text-sm text-gray-500">${job.jobLocation || job.status}</p>
            <p class="jobDesc mt-2">${job.jobDesc || job.desc}</p>
            <div class="mt-4 flex gap-3">
                <button class="interviewBtn border border-green-500 px-4 py-1">INTERVIEW</button>
                <button class="rejectedBtn border border-red-500 px-4 py-1">REJECTED</button>
            </div>
        </div>
        <i class="text-red-600 fa-regular fa-trash-can"></i>
        </div>
    `;
    return card;
}

// ===== RENDER JOBS =====
function renderJobs(){
    for(let i=0; i<jobs.length; i++){
        container.appendChild(createCard(jobs[i]));
    }
}
function renderInterViews(){
    renderInterView.innerHTML = '';
    for(let i=0; i<interViewList.length; i++){
        renderInterView.appendChild(createCard(interViewList[i]));
    }
}
function renderRejectedViews(){
    renderRejected.innerHTML = '';
    for(let i=0; i<rejectedList.length; i++){
        renderRejected.appendChild(createCard(rejectedList[i]));
    }
}

// ===== INITIAL RENDER =====
renderJobs();