'use client'

import { useState } from "react"

export function AgeCalculator(){
  const [fullage,setFullAge] = useState<number[]>([])
  const[errors,setErrors]= useState<boolean>(false)
  const[dateInput,setDateInput] = useState<{day:string;month:string;year:number}>({
     day: '0',
     month: '0',
     year: 1
  })


   function calculateFullAge(day:number, month:number, year:number) {
    const isValide =  isValidDate(day,month,year)
    if(isValide){
      setErrors(false)
      const today = new Date();
      const birthDate = new Date(year, month - 1, day); // Month is 0-based in JS Dates
    
      let ageYears = today.getFullYear() - birthDate.getFullYear();
      let ageMonths = today.getMonth() - birthDate.getMonth();
      let ageDays = today.getDate() - birthDate.getDate();
    
      // Adjust if current month/day is before birth month/day
      if (ageDays < 0) {
        ageMonths--;
        const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += previousMonth.getDate(); // Add days of the previous month
      }
    
      if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
      }
      const fullAge =[ageYears,ageMonths,ageDays];
      setFullAge(fullAge)
    }else{
      setErrors(true)
    }
  }

  function isValidDate(day:number, month:number, year:number) {
    
    const currentYear = new Date().getFullYear();
  
    // Check if month is between 1 and 12
    if (month < 1 || month > 12){
      return false;
    }
  
    // Check if year is equal to or less than the current year
    if (year > currentYear){
      return false;
    }
  
    // Check if day is valid for the given month and year
    const daysInMonth = new Date(year, month, 0).getDate();
    
    return day >= 1 && day <= daysInMonth;
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setDateInput(prevState => ({
      ...prevState,
      [name]: name === 'day' || name === 'month' ? value.padStart(2, '0') : value // Ensure every field is a number
    }));
  };
console.log(fullage)
  

  return(
    <>
      <main className="flex justify-center pt-16 items-center">
          <div className="bg-white w-[120vh] p-8 rounded-tl-lg rounded-tr-lg rounded-bl-lg rounded-br-[30%]  gird grid-cols-2 gap-6">
            <div className="relative grid md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 grid-cols-3 gap-6 border-b-[2px] pb-12 border-[#ddd]">
              <div>
                <label className="font-bold text-gray-500" htmlFor="day">DAY</label>
                <input 
                name="day"
                onChange={handleChange}
                // min={1} 
                // max={31} 
                type="text" 
                pattern="\d{2}"
                placeholder="eg: 1 or 01"
                className="w-full font-bold text-[20px] outline-none border border-black p-4 rounded-md" required />
                {
                  (Number(dateInput.day) < 0 || Number(dateInput.day)>31) && <label className="text-gray-400 text-[12px]" htmlFor="error-day">Day must valid</label>
                }
              </div>
              <div>
                <label className="font-bold text-gray-500" htmlFor="month">MONTH</label>
                <input
                name="month"
                onChange={handleChange} 
                // min={1} 
                // max={12} 
                pattern="\d{2}"
                type="number" 
                placeholder="eg: 9 or 09"
                className="w-full font-bold text-[20px]  outline-none border border-black p-4 rounded-md" required />
              {
                  (Number(dateInput.month) < 0 || Number(dateInput.month)>12) && <label className="text-gray-400 text-[12px]" htmlFor="error-day">Month must valid</label>
                }
              </div>
              <div>
                <label className="font-bold text-gray-500" htmlFor="year">YEARS</label>
                <input 
                  name="year"
                  onChange={handleChange}
                  min={1}
                  required 
                  placeholder="eg: 2009"
                  type="number" 
                  className="w-full font-bold text-[20px]  outline-none border border-black p-4 rounded-md" />
                {
                  (dateInput.year < 0 || dateInput.year > new Date().getFullYear()) && <label className="text-gray-400 text-[12px]" htmlFor="error-day">Year must valid (below {new Date().getFullYear() }) </label>
                }
              </div>
              <div></div>
              <div 
              onClick={()=>calculateFullAge(Number(dateInput.day),Number(dateInput.month),dateInput.year)}
              className={`absolute ${fullage.length>=3 ? 'bg-blue-400 hover:bg-black': 'bg-black hover:bg-blue-400'}  md:right-4 lg:right-4 xl:right-4 right-[45%] bottom-[-2rem] cursor-pointer w-16 h-16 flex justify-center items-center rounded-[50%]`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
              </div>
            </div>
            {errors && <p className="text-red-400 md:mt-0 lg:mt-0 xl:mt-0 mt-12">Please input date correct format</p>}
            <div className="text-left block gap-y-3 p-6 font-extrabold text-[52px]">
              <h3><strong className="text-blue-500">{fullage[0] || '--'}</strong> { fullage[0]<=1 ? 'year' : 'years'} </h3>
              <h3><strong className="text-blue-500">{fullage[1] || '--'} </strong> {fullage[1] <=1 ? 'month' : 'months'} </h3>
              <h3><strong className="text-blue-500">{fullage[2] || '--'}</strong>{fullage[2] <=1 ? ' day': ' days'}</h3>
            </div>
          </div>
      </main>
    </>
  )
}