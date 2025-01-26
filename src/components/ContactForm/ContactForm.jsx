import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

export default function ContactForm({ onAddContact }) {
    const validationSchema = Yup.object({
        name: Yup.string()
            .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters")
            .min(3, 'Name must be at least 3 characters')
            .max(50, 'Name cannot be longer than 50 characters')
            .required('Name is required'),
        number: Yup.string()
            .min(3, 'Phone number must be at least 3 characters')
            .max(50, 'Phone number cannot be longer than 50 characters')
            .matches(/^\d{3}-\d{2}-\d{2}$/, "Phone number must be in the format XXX-XX-XX")
            .required('Phone number is required'),
    });

    const handleSubmit = (values, { resetForm }) => {
        const newContact = {
            id: nanoid(),
            name: values.name,
            number: values.number,
        };

        onAddContact(newContact);
        resetForm();
    };

    return (
        <div className={styles.formContainer}>
            <Formik
                initialValues={{ name: '', number: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className={styles.contactForm}>
                    <div className={styles.formGroup}>
                        <Field className={styles.formInput} type="text" name="name" placeholder="Name" />
                        <ErrorMessage name="name" component="div" className={styles.errorMessage} />
                    </div>
                    <div className={styles.formGroup}>
                        <Field className={styles.formInput} type="text" name="number" placeholder="Phone Number" />
                        <ErrorMessage name="number" component="div" className={styles.errorMessage} />
                    </div>
                    <button className={styles.addButton} type="submit">Add contact</button>
                </Form>
            </Formik>
        </div>
    );
}