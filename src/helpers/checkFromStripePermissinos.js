const retrieveOrCreateStripeCustomer = async (user) => {
    const stripeSecret = 'sk_test_51PjpliAAv4Gjcb9s2Uxsi4qs6eAEEhriGvNMO7NMBoXwP7lKDH1ifr7eVQop9WraYNVfeYWbS3BcVYL6lTEfvsKC00QBNiHHDs';

    try {
        const response = await fetch('https://api.stripe.com/v1/customers', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${stripeSecret}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                name: user.name,
                email: user.email,
            }).toString(),
        });

        if (!response.ok) {
            console.log(response);
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const customer = await response.json();
        console.log(customer);
        return customer;

    } catch (error) {
        console.error('Error creating Stripe customer:', error.message);
        throw new Error(error.message);
    }
};

// Example usage
const user = {
    name: 'John Dowwe',
    email: 'john.dowwe@example.com',
};

retrieveOrCreateStripeCustomer(user);