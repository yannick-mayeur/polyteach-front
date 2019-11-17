import S from '../../services'

export const FETCH_STUDENTS = 'FETCH_STUDENTS';
export function fetchStudents() {
  return {
    type: FETCH_STUDENTS,
    payload: S.students.getAllStudents()
  }
}