//Buat fungsi dalam javascript untuk mengecualikan daftar employees yang sudah ada dalam array selected_employees
const employees = [
	{ nik: "1", name: "ABIYYU" },
	{ nik: "2", name: "ADHIKA" },
	{ nik: "3", name: "AFRIE" },
	{ nik: "4", name: "ALAM" },
];

const selected_employees = [
	{ nik: "1", name: "ABIYYU" },
	{ nik: "2", name: "ADHIKA" },
];

// const unselected_employee = ...
function findUnselected(employee, selected) {
	return employee.filter((employee) => {
		// Menggunakan metode some untuk memeriksa true jika salah satu (nik atau name) nilai benar
		return !selected.some(
			(selectedEmployee) =>
				selectedEmployee.nik === employee.nik &&
				selectedEmployee.name === employee.name
		);
	});
}

// Memanggil fungsi untuk employee yang belum terpilih
const unselected_employee = findUnselected(employees, selected_employees);

// Menampilkan daftar employee yang belum terpilih ke konsol
console.log(unselected_employee);

// outputnya yang diharapkan
[
	{ nik: "3", name: "AFRIE" },
	{ nik: "4", name: "ALAM" },
];
