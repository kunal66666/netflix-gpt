export const checkValidData = (email, password) => {
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Invalid email format' ;
    }
  
    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character';
      
    }
  
    return null;
  };


  export const checkSignupData = (name, email, password) => {
    // Name validation
    if (name.trim() === '') {
      return 'Name is required';
    }
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return 'Invalid email format' ;
    }
  
  
    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      return 'Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character';
      
    }
  
    return null;
  };