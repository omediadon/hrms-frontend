<script lang="ts">
export default {
	data(){
		return {}
	},
	mounted(){
	},
	methods: {
		getSubdomain(): string{
			return window.location.hostname.split('.')[0];
		}
	}
};
</script>

<template>

	<v-container>
		<h1>This is the Subdomain Component!</h1>
		<p>Current Subdomain: {{ getSubdomain() }}</p>
	</v-container>
</template>

<style scoped>

</style>


<style scoped>
/* Add your scoped styles here */
</style>
