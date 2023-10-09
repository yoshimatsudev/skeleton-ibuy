<script lang="ts">
	import '../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { AppBar } from '@skeletonlabs/skeleton';
	import { MessageSquare } from 'lucide-svelte';
	import Logo from '../assets/images/logo.png';
	import logo from '../assets/images/logo.png';
	import ViewTransition from '$lib/components/navigation.svelte';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<header class="flex items-center justify-between py-4 bg-primary-900 px-4 lg:px-8">
			<!-- logo - start -->
			<a
				href="/"
				class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
				aria-label="logo"
			>
				<img src={Logo} class="w-20 lg:w-36" alt="" />
			</a>
			<!-- logo - end -->

			<!-- nav - start -->

			<!-- nav - end -->

			<!-- buttons - start -->
			<a
				href="/avaliacao"
				class="btn btn-md lg:btn-lg hover:variant-filled-secondary variant-filled-primary text-white"
				>Falar no whatsapp</a
			>
			<!-- buttons - end -->
		</header>
	</svelte:fragment>
	<!-- (sidebarLeft) -->
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->

	<ViewTransition />
	<slot />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<!-- (footer) -->
</AppShell>
