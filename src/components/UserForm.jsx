import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const createUser = (e) => {
    e.preventDefault();

    const validationErrors = [];

    if (firstName.length < 2) {
    validationErrors.push("First Name must be at least 2 characters");
    }

    if (lastName.length < 2) {
    validationErrors.push("Last Name must be at least 2 characters");
    }

    if (email.length < 5) {
    validationErrors.push("Email must be at least 5 characters");
    }

    if (password.length < 8) {
    validationErrors.push("Password must be at least 8 characters");
    }

    if (validationErrors.length > 0) {
    setErrors(validationErrors);
    return;
    }

    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log("Welcome", newUser);

    // Reset the form fields and error messages
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors([]);
    };

    return (
    <form onSubmit={createUser}>
        {errors.length > 0 && (
        <div className="error-container">
            {errors.map((error, index) => (
            <p key={index} className="error">{error}</p>
            ))}
        </div>
        )}

        <div>
        <label htmlFor="firstName">First Name: </label>
        <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
        />
        </div>

        <div>
        <label htmlFor="lastName">Last Name: </label>
        <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
        />
        </div>

        <div>
        <label htmlFor="email">Email: </label>
        <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        </div>

        <div>
        <label htmlFor="password">Password: </label>
        <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        </div>

        <div>
        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
        />
        </div>

        <input type="submit" value="Create User" />
    </form>
    );
};

export default UserForm;
