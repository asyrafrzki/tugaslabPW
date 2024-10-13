// alert saat dibuka dan refresh
window.onload = function() {
    alert("Selamat datang! Silakan isi form di bawah.");
};

// Mengambil elemen root
const root = document.querySelector('.root');

// form
function displayForm() {
    root.innerHTML = ''; //menghapus isi root

    // buat form
    const form = document.createElement('form');

    // buat heading
    const heading = document.createElement('h2');
    heading.textContent = 'Form Data Diri';

    // label dan input
    function createFormGroup(labelText, inputType, inputPlaceholder) {
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');

        const label = document.createElement('label');
        label.textContent = labelText;

        const input = document.createElement('input');
        input.type = inputType;
        input.placeholder = inputPlaceholder;

        // Menambahkan label dan input ke form-group
        formGroup.appendChild(label);
        formGroup.appendChild(input);

        return formGroup;
    }

    //  Nama
    const fieldUsername = createFormGroup('Nama:', 'text', 'Nama');
    const inputUsername = fieldUsername.querySelector('input');

    //  NIM
    const fieldNIM = createFormGroup('NIM:', 'text', 'NIM');
    const inputNIM = fieldNIM.querySelector('input');

    //  KOM
    const fieldKOM = createFormGroup('KOM:', 'text', 'KOM');
    const inputKOM = fieldKOM.querySelector('input');

    //  Foto
    const formGroupFoto = document.createElement('div');
    formGroupFoto.classList.add('form-group');
    const labelFoto = document.createElement('label');
    labelFoto.textContent = 'Foto:';
    const inputFile = document.createElement('input');
    inputFile.type = 'file';

    //required
    inputUsername.required = true;
    inputNIM.required = true;   
    inputKOM.required = true;
    inputFile.required = true;

    
    // Menambahkan label dan input file
    formGroupFoto.appendChild(labelFoto);
    formGroupFoto.appendChild(inputFile);

    // submit
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Submit';

    // Menambahkan elemen-elemen ke form
    form.appendChild(heading);
    form.appendChild(fieldUsername);
    form.appendChild(fieldNIM);
    form.appendChild(fieldKOM);
    form.appendChild(formGroupFoto);
    form.appendChild(submitButton);

    // Menambahkan form ke root
    root.appendChild(form);

    // hasil submit
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form untuk refresh halaman

        // ngambil data dari input
        const username = inputUsername.value;
        const nim = inputNIM.value;
        const kom = inputKOM.value;
        const foto = inputFile.files[0];

        // Menampilkan hasil submit
        displayResult(username, nim, kom, foto);
    });
}

// Menampilkan hasil submit
function displayResult(username, nim, kom, foto) {
    // Membuat elemen baru untuk menampilkan hasil
    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result-card'); 
    resultDiv.style.textAlign = 'center';

    // Menampilkan gambar
        const img = document.createElement('img');
        img.src = URL.createObjectURL(foto);
        img.style.width = '200px';
        img.style.height = '300px';
        img.style.objectFit = 'cover';
        img.style.borderRadius = '15px';
        resultDiv.appendChild(img);
 

    // Menampilkan data
    const userInfo = document.createElement('div');
    userInfo.innerHTML = `
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>NIM:</strong> ${nim}</p>
        <p><strong>KOM:</strong> ${kom}</p>
    `;

    resultDiv.appendChild(userInfo);

    // Membuat tombol Isi Kembali
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Isi Kembali';
    resetButton.style.marginTop = '20px';
    resetButton.style.padding = '10px 20px';
    resetButton.style.backgroundColor = '#6e45e2';
    resetButton.style.color = 'white';
    resetButton.style.border = 'none';
    resetButton.style.borderRadius = '8px';
    resetButton.style.cursor = 'pointer';
    resetButton.style.fontSize = '1em';

    //  tombol Isi Kembali
    resetButton.addEventListener('click', function() {
        displayForm(); // Menampilkan form 
    });

    resultDiv.appendChild(resetButton);

    root.innerHTML = ''; // Mengosongkan root
    root.appendChild(resultDiv);
}

// Menampilkan form awal
displayForm();
