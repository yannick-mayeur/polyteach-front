import S from '../../services'

export const FETCH_STUDENTS = 'FETCH_STUDENTS';
export function fetchStudents() {
  return S.students.getAllStudents()
  .then(res => {
    return {
      type: FETCH_STUDENTS,
      payload: res
    }
  })
}