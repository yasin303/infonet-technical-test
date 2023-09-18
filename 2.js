// Buat fungsi Javascript untuk menyalin field amount dari daftar benefit ke item benefit lainnya berdasarkan kriteria tertentu
const benefit = [
	{
		id: 1,
		name: "Gaji Pokok",
		amount: 3000000,
		unit: 12,
	},
	{
		id: 2,
		name: "Tunjangan Hari Raya (THR)",
		amount: 0,
		unit: 1,
	},
	{
		id: 3,
		name: "Uang makan",
		amount: 100000,
		unit: 12,
	},
	{
		id: 4,
		name: "Tunjangan shift",
		amount: 0,
		unit: 0.2,
	},
];

const kriteria = [
	{ "Gaji Pokok": ["Tunjangan Hari Raya (THR)", "Tunjangan shift"] },
];

// fungsi untuk menyalin field 'amount' berdasarkan kriteria
function copyAmountOnCriteria(benefit, kriteria) {
	const result = [...benefit]; // menyalin benefit ke result
	kriteria.forEach((criteria) => {
		for (const key in criteria) {
			const source = key;
			const target = criteria[key];
			const sourceBenefit = result.find((b) => b.name === source);

			if (sourceBenefit) {
				target.forEach((targetBenefitName) => {
					const targetBenefit = result.find(
						(b) => b.name === targetBenefitName
					);
					// Salin nilai amount dari sourceBenefit ke targetBenefit
					if (targetBenefit) {
						targetBenefit.amount = sourceBenefit.amount;
					}
				});
			}
		}
	});
	return result;
}

const updatedBenefit = copyAmountOnCriteria(benefit, kriteria);

// menampilkan hasil benefit yang baru dari field amount yang disalin
console.log(updatedBenefit);
