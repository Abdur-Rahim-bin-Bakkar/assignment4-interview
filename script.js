function changeBtnColor(id){
    let allBtn = document.getElementById('allBtn')
    let InterviewBtn = document.getElementById('interviewBtn')
    let RejectedBtn = document.getElementById('rejectedBtn')
    // console.log(allBtn,InterviewBtn,RejectedBtn)


    allBtn.classList.remove('bg-[#3B82F6]','text-white');
    InterviewBtn.classList.remove('bg-[#3B82F6]','text-white');
    RejectedBtn.classList.remove('bg-[#3B82F6]','text-white');


    allBtn.classList.add('bg-white','text-[#64748B]');
    InterviewBtn.classList.add('bg-white','text-[#64748B]');
    RejectedBtn.classList.add('bg-white','text-[#64748B]');

    let selectBtn = document.getElementById(id);
    selectBtn.classList.remove('bg-white','text-[#64748B]');
    selectBtn.classList.add('bg-[#3B82F6]','text-white')
    // console.log(id,selectBtn)
}
