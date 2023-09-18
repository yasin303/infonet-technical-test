<template>
	<main>
		<h1>Technical Test Number 3</h1>
		<!-- button -->
		<div>
			<button @click="addItem">+ Add Item</button>
		</div>
		<form @submit.prevent="input">
			<div v-for="input in form" :key="input.key">
				<select v-model="input.criteria" name="criteria" placeholder="Criteria">
					<!-- form criteria -->
					<option value="">Criteria</option>
					<option v-for="opt in selection" :key="opt" :value="opt">
						{{ opt }}
					</option>
				</select>
				<!-- form input data -->
				<input v-model="input.input" type="text" placeholder="Input" />
				<button @click="delete" @submit.prevent>X</button>
			</div>
		</form>
		<!-- show form -->
		<code>
			<pre>{{ showForm }}</pre>
		</code>
	</main>
</template>

<script>
export default {
	data() {
		return {
			selection: [
				"Age",
				"Education",
				"Interest",
				"Language",
				"Marital Status",
				"Skill",
			],
			form: [
				{
					criteria: "",
					input: "",
				},
			],
		};
	},
	methods: {
		addItem: function () {
			this.form.push({
				criteria: "",
				input: "",
			});
		},
		delete: function (event) {
			this.form.splice(this.form.indexOf(event), 1);
		},
		input: function () {
			console.log(this.form);
		},
	},
	computed: {
		showForm() {
			const dataForm = this.form.map((data) => ({
				criteria: data.criteria,
				input: data.input,
			}));
			return JSON.stringify(dataForm, undefined, 2);
		},
	},
};
</script>
