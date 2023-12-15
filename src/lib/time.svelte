<script>
	import { time, elapsed } from './time.js';

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
</script>


<div class="time-widget">The time is {formatter.format($time)}</div>


<style>
    .time-widget {
      font-size: 2rem;
      color: #333;
    }
  </style>
  


