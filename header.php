<header id="header-desktop">
	<div class="wrapper">
		<div class="container container-left desktop">
			<a href="index.php" class="logo">
				<img src="img/header/logo-black.svg">
			</a>
			<div class="sep"></div>
			<div class="tel">
				<img src="img/header/icn-tel.svg">
				<a class="num" href="tel:0428296262">
					04 28 29 62 62
				</a>
			</div>
		</div>
		<div class="container container-left mobile">
			<a class="icon" href="tel:0428296262">
				<img src="img/header/icn-tel.svg">
			</a>
			<a href="index.php" class="logo">
				<img src="img/header/logo-black.svg">
			</a>
			<div class="burger">
				<div class="line"></div>
				<div class="line"></div>
			</div>
			<a class="tel" href="tel:0428296262">
				<img src="img/header/icn-tel.svg">
				<div class="num">
					04 28 29 62 62
				</div>
			</a>
		</div>
		<div class="container container-right">
			<div class="li-link">
				<a <?php if($page=="features") echo('class="active"');?> href="features.php">
					Fonctionnalités
				</a>
				<a <?php if($page=="pricing") echo('class="active"');?> href="pricing.php">
					Tarifs
				</a>
				<a <?php if($page=="creation") echo('class="active"');?> href="creation.php">
					Création d’entreprise
				</a>
				<a <?php if($page=="team") echo('class="active"');?> href="team.php">
					L’équipe
				</a>
				<a href="">
					Blog
				</a>
			</div>
			<div class="li-action">
				<a class="action-signin" href="">
					Se Connecter
				</a>
				<a class="action-signup btn" href="">
					<div class="btn-content">
						S’inscrire
					</div>
				</a>
			</div>
		</div>
	</div>
</header>