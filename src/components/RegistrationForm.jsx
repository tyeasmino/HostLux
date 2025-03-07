import React from 'react'

const RegistrationForm = () => {
    return (
        <section className='max-w-screen-xl mx-auto py-30'>
            <div className='max-w-md flex flex-col gap-1 mx-auto'>
                <div className='flex items-end gap-5'> <span className='text-4xl font-semibold'>Register</span> <span className='text-2xl text-gray-500'>Create an account with us...</span> </div>
                <div className='w-full h-[1px] bg-gray-300 '></div>
                <div className='text-[12px] flex gap-3'>
                    <span className='text-[#4890fc]'>Portal Home</span>
                    <span>/</span>
                    <span>Register</span>
                </div>
            </div>

            <form action="">
                <div className="divider">Personal Information</div>

                <div className='flex gap-5'>
                    <div className='md:w-1/2'>
                        <div className='w-full'>
                            <label className="input validator">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                                <input className='w-full' type="input" required placeholder="First Name" pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />
                            </label>
                            <p className="validator-hint">
                                Must be 3 to 30 characters
                                <br />containing only letters, numbers or dash
                            </p>
                        </div>
                        <div className='w-full'>
                            <label className="input validator">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                                <input type="input" required placeholder="Last Name" pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />
                            </label>
                            <p className="validator-hint">
                                Must be 3 to 30 characters
                                <br />containing only letters, numbers or dash
                            </p>
                        </div>
                    </div>
                    <div className='md:w-1/2'>
                        <div>
                            <label className="input validator">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                                <input type="input" required placeholder="Username" pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />
                            </label>
                            <p className="validator-hint">
                                Must be 3 to 30 characters
                                <br />containing only letters, numbers or dash
                            </p>
                        </div>
                        <div>
                            <label className="input validator">
                                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                                <input type="input" required placeholder="Username" pattern="[A-Za-z][A-Za-z0-9\-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />
                            </label>
                            <p className="validator-hint">
                                Must be 3 to 30 characters
                                <br />containing only letters, numbers or dash
                            </p>
                        </div>
                    </div>
                </div>

                <div className="divider">Billing Address</div>
                <div className="divider">Account Security</div>


                <button className='bg-[#4890fc] text-white rounded-md px-8 py-3'>Submit</button>
            </form>
        </section>
    )
}

export default RegistrationForm