let applieds = document.getElementsByClassName('applied');
for (let i of applieds) {
    i.classList.add('hidden')
}

let corentStatus = ''
let allInterContainer = document.getElementById('allInterContainer');
let interviewContainer = document.getElementById('interviewContainer')
let rejectContainer = document.getElementById('rejectContainer')
function changeBtnColor(id) {
    corentStatus  = id;
    let allBtn = document.getElementById('allBtn')
    let InterviewBtn = document.getElementById('interviewBtn')
    let RejectedBtn = document.getElementById('rejectedBtn')
    // console.log(allBtn,InterviewBtn,RejectedBtn)


    allBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    InterviewBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    RejectedBtn.classList.remove('bg-[#3B82F6]', 'text-white');


    allBtn.classList.add('bg-white', 'text-[#64748B]');
    InterviewBtn.classList.add('bg-white', 'text-[#64748B]');
    RejectedBtn.classList.add('bg-white', 'text-[#64748B]');

    let selectBtn = document.getElementById(id);
    selectBtn.classList.remove('bg-white', 'text-[#64748B]');
    selectBtn.classList.add('bg-[#3B82F6]', 'text-white')
    // console.log(id,selectBtn)
    let forall = document.getElementById('forall')
    let forinter = document.getElementById('forinter')
    let forreject = document.getElementById('forreject')

    if (id === 'allBtn') {
        allInterContainer.classList.remove('hidden');
        interviewContainer.classList.add('hidden')
        rejectContainer.classList.add('hidden')

        forall.classList.remove('hidden')
        forinter.classList.add('hidden')
        forreject.classList.add('hidden')
    }
    else if (id === 'interviewBtn') {
        allInterContainer.classList.add('hidden');
        interviewContainer.classList.remove('hidden')
        rejectContainer.classList.add('hidden')


        forall.classList.add('hidden')
        forinter.classList.remove('hidden')
        forreject.classList.add('hidden')
    }
    else if (id === 'rejectedBtn') {
        allInterContainer.classList.add('hidden');
        interviewContainer.classList.add('hidden')
        rejectContainer.classList.remove('hidden')


        forall.classList.add('hidden')
        forinter.classList.add('hidden')
        forreject.classList.remove('hidden')
    }
}
let interviewArray = [];
let rejectAray = [];
function setNumbers() {
    let totalInterviewNum = document.getElementById('totalInterviewNum')
    let InterviewNum = document.getElementById('InterviewNum')
    let RejectedNUM = document.getElementById('RejectedNUM')

    totalInterviewNum.innerText = allInterContainer.children.length;
    InterviewNum.innerText = interviewArray.length;
    RejectedNUM.innerText = rejectAray.length;


    let avaibleJobs = document.getElementById('avaibleJobs');
    avaibleJobs.innerText = allInterContainer.children.length;
    let avaibleJobss = document.getElementById('avaibleJobss');
    avaibleJobss.innerText = allInterContainer.children.length;

    let abaibleINter = document.getElementById('abaibleINter')
    abaibleINter.innerText = interviewArray.length
    let avaibleJobsss = document.getElementById('avaibleJobsss');
    avaibleJobsss.innerText = allInterContainer.children.length;

    let abaibleINterr = document.getElementById('abaibleINterr')
    abaibleINterr.innerText = rejectAray.length;
}
setNumbers()

document.getElementById('mainEvent').addEventListener("click", function (e) {
    if (e.target.classList.contains('interview')) {

        let parent = e.target.parentNode.parentNode.parentNode;
        let company = parent.querySelector('.company').innerText
        let skil = parent.querySelector('.skil').innerText
        let slary = parent.querySelector('.slary').innerText
        let applied = parent.querySelector('.applied')
        let discrip = parent.querySelector('.discrip').innerText;
        applied.classList.remove('hidden', 'bg-[#EEF4FF]', 'text-black', 'btn-error', 'btn-outline', 'text-[red')
        applied.classList.add('btn-success', 'btn-outline', 'text-[green')
        applied.innerText = 'Interview'
        let obj = {
            company,
            skil,
            slary,
            applied,
            discrip
        }
        let exiest = interviewArray.find(item => item.company == obj.company)
        if (!exiest) {
            interviewArray.push(obj)
        }
        rejectAray = rejectAray.filter(item=> item.company !== obj.company)
        if(corentStatus === 'rejectedBtn'){
            createReject()
        }
        // createReject()
        createInterview()
        setNumbers()

    }
    else if (e.target.classList.contains('reject')) {
        console.log('reject clicked')
        let parent = e.target.parentNode.parentNode.parentNode;
        let company = parent.querySelector('.company').innerText
        let skil = parent.querySelector('.skil').innerText
        let slary = parent.querySelector('.slary').innerText
        let applied = parent.querySelector('.applied')
        let discrip = parent.querySelector('.discrip').innerText

        applied.classList.remove('hidden', 'bg-[#EEF4FF]', 'text-black')
        applied.classList.add('btn-error', 'btn-outline', 'text-[red')
        applied.innerText = 'Rejected'
        let obj = {
            company,
            skil,
            slary,
            applied,
            discrip
        }
        let exiest = rejectAray.find(item => item.company == obj.company)
        if (!exiest) {
            rejectAray.push(obj)
        }
        interviewArray = interviewArray.filter(item=> item.company !== obj.company)

        if(corentStatus === "interviewBtn"){

            // createReject()
            createInterview()
        }
        createReject()
        setNumbers()

    }
})
// interviewContainer.addEventListener('click',function(e){
//     if(e.target.classList.contains("reject")){

//         // let deleter = e.target.closest('.card');
//         // interviewContainer.removeChild(e.target)

//         console.log(e.target)
//         // this.remove(e.target)
//     }
// })

function createInterview() {
    interviewContainer.innerHTML = ''
    // if(interviewArray.length === 0){
    //     let div = document.createElement('div')
    //     div.innerHTML = `
    //      <section id="interviewContainer" class=" max-w-[1110px] mx-auto  space-y-4 hidden pb-10">

    //         <div class="card  h-[400px] bg-white justify-center items-center">
    //             <img src="jobs.png" alt="" class="w-25 mb-5">
    //             <h1 class="text-[#002C5C] text-2xl font-semibold">No jobs available</h1>
    //             <p class="text-[#64748B]">Check back soon for new job opportunities</p>
    //         </div>
    //     </section>
        
    //     `
    //  interviewContainer.appendChild(div)   
    // }
    for (let item of interviewArray) {
        let div = document.createElement('div')
        div.innerHTML = `
    <div class="card bg-white p-6  flex-row justify-between">
            <div class=" ">
                <h1 class="company text-[18px] font-semibold text-[#Mobile First Corp]">${item.company}</h1>
                <p class="skil text-[#64748B] mb-5">${item.skil}</p>
                <p class="slary text-[#64748B] mb-5">${item.slary}</p>

                <button class="applied btn  w-[115px] h-9 btn-success btn-outline">${item.applied.innerText}</button>
                <p class="discrip text-[#323B49] mt-2 text-sm">${item.discrip}</p>
                <div class="card-btns flex gap-3 mt-5">
                    <button class="interview btn btn-success btn-outline">Interview</button>
                    <button class="reject btn btn-error btn-outline">Rejected</button>
                </div>
            </div>
            <div class="">
                <div id="deleteBtn" class="w-8 h-8 rounded-full p-4 border-1 border-[#F1F2F4] flex justify-center items-center"><i class="fa-regular fa-trash-can"></i></div>
            </div>
        </div>
    
    `

        interviewContainer.appendChild(div)
    }
}
function createReject() {
    rejectContainer.innerHTML = ''
    for (let item of rejectAray) {
        let div = document.createElement('div')
        div.innerHTML = `
    <div class="card bg-white p-6  flex-row justify-between">
            <div class=" ">
                <h1 class="company text-[18px] font-semibold text-[#Mobile First Corp]">${item.company}</h1>
                <p class="skil text-[#64748B] mb-5">${item.skil}</p>
                <p class="slary text-[#64748B] mb-5">${item.slary}</p>

                <button class="applied btn btn-outline btn-error w-[115px] h-9 ">${item.applied.innerText}</button>
                <p class="discrip text-[#323B49] mt-2 text-sm">${item.discrip}</p>
                <div class="card-btns flex gap-3 mt-5">
                    <button class="interview btn btn-success btn-outline">Interview</button>
                    <button class="reject btn btn-error btn-outline">Rejected</button>
                </div>
            </div>
            <div class="">
                <div id="deleteBtn" class="w-8 h-8 rounded-full p-4 border-1 border-[#F1F2F4] flex justify-center items-center"><i class="fa-regular fa-trash-can"></i></div>
            </div>
        </div>
    
    `

        rejectContainer.appendChild(div)
    }
}