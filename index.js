document.getElementById('contactForm').addEventListener('submit', function(event) {
    var isValid = true;

    // Kiểm tra các ô input và textarea
    var inputs = document.querySelectorAll('#contactForm input[type="text"], #contactForm input[type="email"], #contactForm textarea');
    inputs.forEach(function(input) {
        if (!input.value) {
            input.classList.add('invalid');
            input.nextElementSibling.style.display = 'block';
            isValid = false;
        } else {
            input.classList.remove('invalid');
            input.nextElementSibling.style.display = 'none';
        }
    });

    // Kiểm tra các ô radio
    var radioGroups = document.querySelectorAll('.radio-buttons');
    radioGroups.forEach(function(group) {
        var radios = group.querySelectorAll('input[type="radio"]');
        var isChecked = Array.from(radios).some(function(radio) {
            return radio.checked;
        });

        if (!isChecked) {
            group.classList.add('invalid');
            group.nextElementSibling.style.display = 'block';
            isValid = false;
        } else {
            group.classList.remove('invalid');
            group.nextElementSibling.style.display = 'none';
        }
    });

    // Kiểm tra checkbox
    var consentCheckbox = document.getElementById('consent');
    if (!consentCheckbox.checked) {
        consentCheckbox.parentElement.classList.add('invalid');
        consentCheckbox.parentElement.nextElementSibling.style.display = 'block';
        isValid = false;
    } else {
        consentCheckbox.parentElement.classList.remove('invalid');
        consentCheckbox.parentElement.nextElementSibling.style.display = 'none';
    }

    // Ngăn chặn gửi biểu mẫu nếu có lỗi
    if (!isValid) {
        event.preventDefault();
    }
});
