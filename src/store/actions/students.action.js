import S from '../../services'

export const FETCH_STUDENTS = 'FETCH_STUDENTS';
export function fetchStudents() {
  return {
    type: FETCH_STUDENTS,
    payload: S.students.getAllStudents()
  }
}

export const ADD_STUDENTS = 'ADD_STUDENTS';
export function addStudents(students, fromClass) {
  return {
    type: ADD_STUDENTS,
    payload: {selectedStudents: students, fromClass: fromClass}
  }
}

export const CLEAR_STUDENTS = 'CLEAR_STUDENTS';
export function clearStudents() {
  return {
    type: CLEAR_STUDENTS,
  }
}
