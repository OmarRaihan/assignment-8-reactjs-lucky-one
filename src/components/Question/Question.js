
import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <div className='question-1 w-75 mx-auto'>
                <h3 className='text-center mb-3'>Props ও State এর মধ্যকার পার্থক্য</h3>
                <p className='text-center'>
                Props এবং State, এই দুটো React এ ব্যবহার করা হয় কম্পোনেন্ট এর ভিতরের ডাটা নিয়ন্ত্রনের জন্য। মূলত Props সেট হয় তার প্যারেন্ট কম্পোনেন্ট দ্বারা । এর ব্যবহার হয় চাইল্ড কম্পোনেন্ট এ ডাটা পাঠানোর জন্য। এটি মূলত সমগ্র উপাদান জুড়েই স্থির থাকে। অপরদিকে যদি ডাটা পরিবর্তনের দরকার হয় সেক্ষেত্রে State এর ব্যবহার হয়। অর্থাৎ Props অপরিবর্তনীয় হলেও State পরিবর্তনযোগ্য। যদি কেউ Props পরিবর্তন করতে চাই, তাহলে তা করতে হবে parent component থেকে। এরপর তা child component এ পাঠাতে হবে।
                </p>
            </div>
        </div>
    );
};

export default Question;