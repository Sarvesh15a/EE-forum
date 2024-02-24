// PrivacyPolicy.js
import img1Url from '../../public/157.png'
import img2Url from '../../public/images.jpeg'
import img3Url from '../../public/terms-and-conditions-icon-1.jpg'
import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
            <div className="flex items-center justify-center ">
                <img className='h-40 w-50' src={img1Url} alt="" />
            </div>
        <div className="container mx-auto flex flex-col md:flex-row md:space-x-4">
          <div className="p-4 flex-1 mb-4 md:mb-0">
            {/* Left Box */}
            <h2 className='text-3xl font font-semibold flex'>
                 <span ><img className='h-10 w-15 pr-5' src={img1Url} alt="" /></span>
                 Privacy Policy</h2>
            <p className='mt-5'>
            Explains what information we collect and why, how we use it,
             and how to review and update it.
            </p>
            <p className='mt-5'>
            You can use our services in a variety of ways to manage your privacy.
             For example, you can sign up for a Google Account if you want to create 
             and manage content like emails and photos, or see more relevant search
              results. And you can use many Google services when you’re signed out or
               without creating an account at all, like searching on Google or watching
                YouTube videos. You can also choose to browse the web in a private mode,
                 like Chrome Incognito mode. And across our services, you can adjust your
                 privacy settings to control what we collect and how your information is used.
            </p>
            </div>
          <div className=" p-4 flex-1">
            <h2  className='text-3xl font font-semibold flex'>
                <span ><img className='h-10 w-15 pr-5' src={img3Url} alt="" /></span>
                Terms of Service</h2>
            <p className='mt-5'>
            "By accessing or using this website, you agree to be bound by our Terms of Service,
             which constitute a legal agreement between you and us. These Terms outline the
              conditions and limitations governing your use of our website, including your
               rights and responsibilities as a user. It is important to review these Terms 
               carefully before proceeding further. Your continued use of the website implies 
               your acceptance of these Terms and any updates or amendments that may be made 
               from time to time. Please note that failure to comply with the Terms may result
                in termination of your access to the website, and you may be held liable for any
                 damages incurred as a result of your non-compliance. For more information about
                  our policies regarding privacy, copyright, and trademarks, please refer to our
                   Privacy Policy and other relevant sections of the website."
            </p>
          </div>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row md:space-x-4">
          <div className="p-4 flex-1 mb-4 md:mb-0">
            {/* Left Box */}
            <h2 className='text-3xl font font-semibold'> Our Privacy and Security Principles</h2>
            <p className='mt-5'>
            We build privacy that works for everyone. It’s a responsibility that comes with creating
             products and services that are accessible for all. We look to these principles to
              guide our products, our processes, and our people in keeping our users’ data 
              private, safe, and secure.
            </p>
            </div>
          <div className=" p-4 flex-1">
            <h2  className='text-3xl font font-semibold flex'><span className='pr-5'> <img className='h-10 w-15' src={img2Url} alt="" /></span>Account</h2>
            <p className='mt-5'>
            Control, protect, and secure your account, all in one place.
             Your Google Account gives you quick access to settings and tools
              that let you safeguard your data and protect your privacy.
            </p>
          </div>
        </div>
        </div>
      );
};

export default PrivacyPolicy;
