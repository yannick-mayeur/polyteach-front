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

export const REMOVE_STUDENTS = 'REMOVE_STUDENTS';
export function removeStudents(students, fromClass) {
  return {
    type: REMOVE_STUDENTS,
    payload: {selectedStudents: students, fromClass: fromClass}
  }
}

export const REMOVE_STUDENT = 'REMOVE_STUDENT';
export function removeStudent(student, fromClass) {
  return {
    type: REMOVE_STUDENT,
    payload: {selectedStudents: student, fromClass: fromClass}
  }
}

export const CLEAR_STUDENTS = 'CLEAR_STUDENTS';
export function clearStudents() {
  return {
    type: CLEAR_STUDENTS,
  }
}
