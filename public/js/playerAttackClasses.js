const var HEALTH = 100;
const var DMG = 10;
////////////////////////////////////////////////////////////////////////////////
 //attack class ctor
 var Attack = function(myDamage)
	{
		console.log("Attack Instance created")
		myDamage = DMG;
	}

//attack 
Attack.prototype.attack(player2)
	{
		console.log("Player Instance created")
		player2.setHealth(player2.getHealth() - Attack.getDamage()); 
	}
	
//get Damage 
Attack.prototype.getDamage()
	{
		return myDamage; 
	}

/////////////////////////////////////////////////////////////////////////////////
//player class ctor
var Player = function(myHealth, myAttack)
	{
		console.log("Player Instance created")
		myHealth = HEALTH;
		myAttack = new Attack();
	}
Player.prototype.takeDamage()
	{
		if (health > 0 )
		{
			this.setHealth(health - this.myAttack().getDamage());
		}
	}
	
//health setter
Player.prototype.setHealth(health)
	{
		//sets health 
		myHealth = health;
	}

//health getter
Player.prototype.getHealth(health)
	{
		//qets health 
		return myHealth;
	}

Player.prototype.giveDamage(player2)
{
	//if not dead
	if ((this.getHealth) > 0)
		{
			this.myAttack.attack(player2);
		}
}

/////////////////////////////////////////////////////////////////////////
