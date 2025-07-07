import React from 'react';
import { useAuthStore } from '../store/auth';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningup } = useAuthStore();

  const validateForm = () => {

  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return <div className="min-h-screen grid lg:grid-cols-2">
    { /* left side */ }
    
  </div>
}

export default SignUpPage;
