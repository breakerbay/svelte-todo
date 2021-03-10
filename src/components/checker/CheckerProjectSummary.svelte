<script>
    export let project;
</script>

<div class="card">
<!--    <img src="img_avatar.png" alt="Avatar" style="width:100%">-->
    <div class="container">
        <h4><b>{project.name}</b></h4>
        <p>{project.id}</p>
        <p>{project.accountId}</p>
        <p>{project.number}</p>
        <p>{project.accountName}</p>
        <p>{project.accountUserId}</p>
        <p>{project.accountOwner}</p>
    </div>
</div>

<style>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
</style>

<!--
Block links
Object fit
Address
Cards
https://www.w3schools.com/howto/howto_css_cards.asp
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_cards
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_cards2
https://www.w3schools.com/howto/howto_css_profile_card.asp
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_profile_card
https://www.w3schools.com/howto/howto_css_product_card.asp
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_product_card
https://www.w3schools.com/howto/howto_css_coupon.asp
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_coupon
https://github.com/mdn/css-examples

TODO Add Address, Site Photo, Street Map to location
-->

