import React from 'react'

function Personel() {

  const employees = [
    { id:'e1' , name:'',color:'blue'},
    { id:'e2' , name:'Paweł.O',color:'red'},
    { id:'e3' , name:'Marek.O',color:'green'},
    { id:'e4' , name:'Karol.O',color:'cyan'},
   
  ]

  const shifts = [
  {
    id: "s1",
    employeeId: "e1", 
    date: "2024-05-20",
    startHour: 8,  // 08:00
    endHour: 16    // 16:00
  },
  {
    id: "s2",
    employeeId: "e2",
    date: "2024-05-20",
    startHour: 12,
    endHour: 20
  }
];

const shiftsWithNames = shifts.map(shift => {
  // Szukamy pracownika, którego ID zgadza się z ID w zmianie
  const employee = employees.find(emp => emp.id === shift.employeeId);
  
  return {
    ...shift,
    employeeName: employee ? employee.name : "Nieprzypisany"
  };
});

console.log(shiftsWithNames)
  return (
    <div className='personel-container'>
       <tbody>
  {shiftsWithNames.map((shift) => (
    <tr key={shift.id}>
      <td>{shift.id}</td>
      <td>{shift.employeeName}</td>
      <td>{shift.startHour}:00 - {shift.endHour}:00</td>
      <td>{shift.endHour - shift.startHour}h</td>
    </tr>
  ))}
</tbody>

            

        
    </div>
  )
}

export default Personel