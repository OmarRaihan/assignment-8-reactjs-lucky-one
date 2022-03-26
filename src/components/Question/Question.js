
import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <div className='question-1 w-75 mx-auto'>
                <h3 className='text-center mb-3'>Props ও State এর মধ্যকার পার্থক্য</h3>
                <p>
                Props এবং State, এই দুটো React এ ব্যবহার করা হয় কম্পোনেন্ট এর ভিতরের ডাটা নিয়ন্ত্রনের জন্য। মূলত Props সেট হয় তার প্যারেন্ট কম্পোনেন্ট দ্বারা । এর ব্যবহার হয় চাইল্ড কম্পোনেন্ট এ ডাটা পাঠানোর জন্য। এটি মূলত সমগ্র উপাদান জুড়েই স্থির থাকে। অপরদিকে যদি ডাটা পরিবর্তনের দরকার হয় সেক্ষেত্রে State এর ব্যবহার হয়। অর্থাৎ Props অপরিবর্তনীয় হলেও State পরিবর্তনযোগ্য। যদি কেউ Props পরিবর্তন করতে চাই, তাহলে তা করতে হবে parent component থেকে। এরপর তা child component এ পাঠাতে হবে।
                </p>
            </div>
            <div className='question-2 w-75 mx-auto'>
                <h3 className='text-center mb-3'>State কীভাবে কাজ করে ?</h3>
                <p>
                State এ যে আপডেট হয় তা asynchronous । React এ Sate একটি পরিবর্তনীয় অবজেক্ট। একটি নির্দিষ্ট function কে কল করার দ্বারা স্টেট কে পরিবর্তন করা যায়। সেই function এর নাম setState । এই function কল করার দ্বারা যখন কোনো স্টেট পরিবর্তন হয় তখন React আবার রেন্ডার মেথড কে কল করে। এর দ্বারা Render, State এ নতুন ডাটা পাঠিয়ে দেয় এভাবেই state পরিবর্তনের দ্বারা নপ্তুন ভিউ দেখা যায় কিন্তু অন্য কোনো variable বা class property পরিবর্তন হলে রিএক্ট রেন্ডার মেথড রিকল করে না। যার কারনে variable এর value পরিবর্তন হলেও view আগেরটাই থাকে।
                </p>
            </div>
        </div>
    );
};

export default Question;