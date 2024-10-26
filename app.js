// Check if the script is loaded
console.log("JavaScript file is loaded!");

// Define the Supabase credentials and create the client
const SUPABASE_URL = 'https://axzkcivwmekelxlqpxvx.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4emtjaXZ3bWVrZWx4bHFweHZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkzNTE1MzIsImV4cCI6MjA0NDkyNzUzMn0.nYfjuqvWBSGSFk8_ZGKhWPtyVf1g3V3U9pF9GTsXguo';

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Access button and input field elements
const sendButton = document.getElementById('sendButton');
const messageInput = document.getElementById('messageInput');

sendButton.addEventListener('click', async () => {
    console.log("Button clicked");

    const messageText = messageInput.value;

    if (messageText.trim() === '') {
        alert('Please enter a message.');
        return;
    }

    // Insert data into Supabase table
    const { data, error } = await supabaseClient
        .from('business')
        .insert({ name: 'value', email: 'value', password: 'value', contact_number: 'value' });

    if (error) {
        console.error('Error:', error);
        alert('Error sending message.');
    } else {
        alert('Message sent successfully!');
        messageInput.value = ''; // Clear the input field
    }
});
