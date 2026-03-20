from flask import Flask, render_template, request, redirect, send_from_directory
import os

app = Flask(__name__)

# Home Page
@app.route('/')
def home():
    return render_template('index.html')


# Contact Form Submission
@app.route('/submit', methods=['POST'])
def submit():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    # Save messages safely
    file_path = os.path.join(os.getcwd(), "messages.txt")

    with open(file_path, "a", encoding="utf-8") as file:
        file.write(f"Name: {name} | Email: {email} | Message: {message}\n")

    return redirect('/')


# Resume Download
@app.route('/download')
def download():
    return send_from_directory('static', 'resume.pdf', as_attachment=True)


# Run App
if __name__ == '__main__':
    app.run()