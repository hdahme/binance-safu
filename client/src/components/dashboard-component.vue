<template>
  <div class="dashboard">
    <balance-component/>
    <scores-component/>
    <alert-component/>
    <submit-component/>
    <review-component/>
    <br>
    <p>Please note that this is a sample UI. Please see our <a href="https://github.com/CoralProtocol/binance-safu/#api" target="_blank">API docs</a> for integrating this into a production system.</p>
  </div>

</template>

<script>

// Import components
import BalanceComponent from '@/components/balance-component'
import ScoresComponent from '@/components/scores-component'
import AlertComponent from '@/components/alert-component'
import SubmitComponent from '@/components/submit-component'
import ReviewComponent from '@/components/review-component'

export default {
  name: 'dashboard-component',
  data () {
    return {
      title: 'SAFU Fraud Dashboard',
      tagline: 'Coral Protocol'
    }
  },
  beforeMount () {
    this.$store.dispatch('clearItems')
  },
  components: {
    'balance-component': BalanceComponent,
    'scores-component': ScoresComponent,
    'alert-component': AlertComponent,
    'submit-component': SubmitComponent,
    'review-component': ReviewComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
p {
  text-align: center;
}
</style>
