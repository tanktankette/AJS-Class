const membershipTest = (list) => {
  return list.map((applicant) => applicant[0] > 55 && applicant[1] > 7 ? "Senior" : "Open")
}

console.log(membership_test([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]))