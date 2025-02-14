import * as Yup from "yup";

// ============== AUTH ====================
export const signInvAalidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
        "Password mus be at least 6 characters and contain at least one uppercase and one lowercase letter"
      )
      .required("Password is required"),
  });


//   ======================= TEACHER =====================

export const teacherValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters'),
  course: Yup.string().required('Course is required'),

});


// ========================== STUDENT =====================


export const studentValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters'),
  age: Yup.number()
    .required('Age is required')
    .min(5, 'Age must be at least 5')
    .max(100, 'Age cannot exceed 100')
    .typeError('Age must be a number'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
  course: Yup.string().required('Course is required'),
  teacher: Yup.string().required('Teacher is required'),
  group: Yup.string().required('Group is required'),
});



// ============================ GROUP =====================

export const groupValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters'),
  course: Yup.string().required('Course is required'),
});


// ============================ COURSE ================

export const courseValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters'),
  duration: Yup.string()
    .required('duration is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters'),

  price: Yup.string()
    .required('price is required')
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name cannot exceed 50 characters'),
});