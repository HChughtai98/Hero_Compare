import React from "react";
import "../styling/InfoPage.css";

function Info() {
  return (
    <div className="info">
      <div className="info-page">
        <div className="title-info-page">
          <h1>Information Page</h1>
        </div>
        {/* Dota Information */}
        <article className="dota-game-info">
          <h2>Dota2</h2>
          <p>
            <strong>"Dota 2"</strong> is a complex, strategy-oriented game that
            is recognized as one of the forerunners of the MOBA (Multiplayer
            Online Battle Arena) genre. Developed and published by Valve
            Corporation, the game pits two teams of five players against each
            other, with each team's goal being to destroy the opposing team's
            "Ancient," a large structure located within their base. The game is
            known for its deep gameplay mechanics, vast array of heroes (over
            100), and each hero's unique abilities, which players can select at
            the start of each match. The game is highly strategic, requiring
            team coordination, quick decision-making, and real-time management
            of resources and positioning. The map is split into three lanes, and
            the area in between is filled with neutral monsters that can be
            killed for extra gold and experience. Each player controls their
            hero and works to gather resources, defeat enemy heroes, and push
            towards the enemy base. <strong>Dota 2</strong> also boasts one of
            the most significant and passionate esports communities in the
            world, with The International, its annual world championship,
            featuring some of the largest prize pools in esports history. The
            game's complexity and high skill ceiling have made it both a popular
            and enduring title in the competitive gaming scene.
          </p>
        </article>
        <article className="dota-roles">
          <h3>Official Roles in Dota2</h3>
          <p>
            Roles are dictated by many factors, including: the physical stats of
            the hero, what they bring to the table with their abilities as well
            as the nature of their abilities, where they should be laned (or
            jungled), and the amount of gold and items they need to perform
            well. Although the official classifications are fairly rigid, the
            reality is that multiple roles can be filled by every hero depending
            on the choices they make, although some choices are wiser than
            others.
          </p>
          <section>
            <h4>Carry</h4>
            <p>
              "Will become more useful later in the game if they gain a
              significant gold advantage."
            </p>
            <p>
              Carries in <strong>Dota 2</strong> are heroes designed to become
              the most powerful offensive force in the later stages of the game.
              Initially weak and requiring protection and resources, they grow
              stronger with levels and items, eventually "carrying" their team
              to victory either by overpowering enemy heroes or destroying key
              structures. Typically, carries have a high base movement speed and
              rely on their basic attacks, enhanced by abilities, to deal
              damage. The early game is their weakest phase, where they focus on
              farming and avoid risks. As the game progresses, they become
              formidable, especially the "hard" carries who are heavily
              item-dependent. Strength carries are often durable with good
              disables, agility carries deal rapid, high damage, and
              intelligence carries utilize powerful abilities and spells.
              Different carries have varied playstyles—some excel in solo
              encounters and others in team fights. They usually start in a side
              lane with support heroes and may transition to different roles as
              the game develops. Ultimately, a carry's potential to "out-carry"
              others is tied to their ability to effectively gather resources
              and their inherent power level, with agility carries often being
              the strongest in the late game.
            </p>
          </section>
          <section>
            <h4>Support</h4>
            <p>
              "Can focus less on amassing gold and items, and more on using
              their abilities to gain an advantage for the team."
            </p>
            <p>
              Supports in <strong>Dota 2</strong> are team-oriented heroes
              equipped with abilities that protect allies and hinder enemies,
              such as healing spells or stuns. They are less reliant on gold and
              items, often prioritizing team utility purchases like wards and
              smoke over personal gear. Strongest in the early game, supports
              assist the more item-dependent carries by helping them secure gold
              and experience, and should typically let allies secure kills
              unless necessary.
            </p>
          </section>
          <section>
            <h4>Nuker</h4>
            <p>
              "Can quickly kill enemy heroes using high damage spells with low
              cooldowns."
            </p>
            <p>
              Nukers are <strong>Dota 2</strong> heroes specializing in
              delivering powerful and rapid magical damage through their spells.
              They excel in team fights by affecting multiple enemies at once
              and are effective at pushing lanes by quickly clearing waves of
              creeps. Heroes like Lina can instantly eliminate or severely
              damage an opponent with a fast combo, potentially swaying a battle
              in their favor. The use of nukes is governed by their mana costs
              and cooldowns, with some designed for frequent casting and others
              reserved for critical clashes.
            </p>
          </section>
          <section>
            <h4>Disabler</h4>
            <p>"Has a guaranteed disable for one or more of their spells." </p>
            <p>
              Disabler heroes in <strong>Dota 2</strong> are characterized by
              their crowd control abilities, effective in immobilizing or
              otherwise incapacitating enemies, either individually or in an
              area. Often found in support roles, they assist carries in lane by
              thwarting enemy aggression. While most carries have limited
              disabling abilities, some like Faceless Void are exceptions.
              Disablers typically have low base movement speed, which can be
              offset with mobility-enhancing items.
            </p>
          </section>
          <section>
            <h4>Durable</h4>
            <p>"Has the ability to last longer in team fights."</p>
            <p>
              Durable heroes, or "tanks," in <strong>Dota 2</strong> are
              designed to absorb significant amounts of damage, featuring high
              health, armor, or magic resistance and abilities that mitigate or
              evade attacks. Predominantly Strength heroes, they excel in team
              fights by enduring enemy attacks while protecting allies. Though
              most can't force enemies to target them like Axe or Legion
              Commander, they employ strategies like initiating fights or using
              AoE effects to draw focus. Their role is to survive initial
              onslaughts, allowing allies to capitalize on enemy cooldowns,
              making them key initiators in battles.
            </p>
          </section>
          <section>
            <h4>Escape</h4>
            <p>"Has the ability to quickly avoid death." </p>
            <p>
              Escape heroes are heroes equipped with one or more escape
              mechanisms which allow them (or sometimes their allies) to avoid
              damage and abilities while retreating or repositioning themselves
              during a team fight or gank. Escape heroes are particularly suited
              to soloing the "suicide lane" or short lane, as they can turn
              situations where death is inevitable into a temporary delay in
              farm. Escape mechanisms include movement speed buffs,
              invisibility, teleportation (such as Blinking), and evasion. Many
              carry heroes also have escape mechanisms to give them the
              survivability they need to continue farming and killing.
            </p>
          </section>
          <section>
            <h4>Pusher</h4>
            <p>
              "Can quickly siege and destroy towers and barracks at all points
              of the game."
            </p>
            <p>
              Pushers are heroes who focus on bringing down towers quickly,
              thereby acquiring map control. If they succeed, they often shut
              down the enemy carry by forcing them away from farming areas. They
              typically have abilities that fortify allied creep waves, harm
              multiple enemy creeps and/or heroes at once, summon minions, or
              deal massive amounts of damage to enemy towers.
            </p>
          </section>
          <section>
            <h4>Initiator</h4>
            <p>"Good at starting a team fight." </p>
            <p>
              Initiators in <strong>Dota 2</strong> are heroes adept at starting
              team fights, often with abilities that deliver strong AoE damage
              or crowd control, or that can disrupt enemy positioning. Many rely
              on items like Blink Dagger for optimal placement, although some,
              like Elder Titan and Silencer, do not. While often durable, some
              initiators like Enigma and Vengeful Spirit are less tanky. Their
              role becomes crucial in late-game, where successful initiations
              can decisively win team fights.
            </p>
          </section>
        </article>
        <article className="dota-range">
          <h3>Attack range in Dota2</h3>
          <p>
            The attack range is the maximum distance of how far a normal attack
            would hit between the attacker and the unit being attacked. The
            attack range itself is not what decides if a unit is classified as
            Ranged or Melee. This characteristic is set for each unit
            individually, regardless of their actual attack range. This means
            that it is possible for a melee unit to have a higher attack range
            than a ranged unit.
            <section>
              <h4>Melee Attack Type</h4>
              <p>
                Melee heroes attack enemies at close range. They generally have
                higher base health or armor, making them more durable. Typically
                suited for roles like carries, tanks, or initiators, they might
                find it challenging to last-hit creeps under pressure. Many
                melee heroes possess abilities or items to close in on enemies.
              </p>
            </section>
            <section>
              <h4>Ranged Attack Type</h4>
              <p>
                Ranged heroes can attack from a distance. Often having lower
                base health and armor, they are more susceptible to damage but
                can farm and harass from a safer distance. Ranged heroes are
                typically found in roles like carries, supports, or nukers and
                need to position carefully in battles to avoid being targeted.
              </p>
            </section>
          </p>
        </article>
        <article className="dota-complexity">
          <h3>Hero Complexity in Dota2</h3>
          <section>
            <p>
              In <strong>Dota 2</strong>, hero complexity refers to the
              difficulty level associated with mastering a hero's abilities and
              playstyle. The complexity level ranges from <strong>1</strong> to{" "}
              <strong>3</strong>, indicating the hero's ease of use, strategic
              depth, and the skill required to play effectively. These levels
              serve as a guide for players to understand the demands of playing
              each hero and to make informed choices that match their skill and
              experience.
            </p>
          </section>
          <section>
            <h5>Complexity Level 1:</h5>
            <p>
              Heroes with a complexity rating of 1 are considered the easiest to
              play. They typically have straightforward abilities with clear-cut
              uses, making them ideal for beginners. These heroes often have
              fewer active abilities and more passive ones, reducing the need
              for quick reflexes and intricate ability combos. They are
              forgiving of mistakes and require less intricate knowledge of game
              mechanics, which helps new players focus on learning the overall
              dynamics of Dota 2.
            </p>
          </section>
          <section>
            <h5>Complexity Level 2:</h5>
            <p>
              Level 2 heroes offer a moderate challenge and are suitable for
              players who have a grasp of the game's basics. These heroes might
              feature abilities with more significant interactions, requiring
              players to understand not only their own hero's skills but also
              how they can affect allies and enemies in various situations. They
              may have skill shots, targeted spells, or require specific
              positioning to be most effective. Playing these heroes well often
              involves making more strategic decisions and having better game
              sense.
            </p>
          </section>
          <section>
            <h5>Complexity Level 3:</h5>
            <p>
              Heroes at complexity level 3 are the most challenging to master
              and are recommended for experienced players. They typically have
              abilities that require precise timing, quick decision-making, and
              an advanced understanding of Dota 2's mechanics. These heroes
              might have combos that need to be executed in a specific sequence
              for maximum effect or have abilities that can drastically change
              the outcome of a fight if used correctly. High-complexity heroes
              often have a steeper learning curve, and successfully utilizing
              them can depend on a player's ability to manage multiple tasks
              simultaneously, such as item usage, ability combos, and
              understanding of intricate game mechanics.
            </p>
          </section>
          <section>
            <p>
              Choosing a hero with the appropriate complexity level is crucial
              for a player's growth and enjoyment in Dota 2. As players become
              more familiar with the game, they often progress to more complex
              heroes, which can offer a more rewarding experience due to their
              depth and potential for impactful plays.
            </p>
          </section>
        </article>
        {/* LoL Information */}
        <div className="lol-game-info">
          <h2>LoL</h2>
          <p>
            "League of Legends" (LoL) is a dynamic and competitive MOBA
            (Multiplayer Online Battle Arena) game that has cemented itself as a
            cultural phenomenon in the world of esports. Developed and published
            by Riot Games, it features a roster of over 140 champions, each with
            unique abilities and playstyles. In the standard game mode, two
            teams of five players compete to destroy the opposing team's Nexus,
            which is protected by defensive structures scattered along three
            lanes. Matches in LoL involve a delicate balance of strategy, skill,
            and teamwork, with players choosing champions that fulfill different
            roles such as damage dealers, tanks, supports, and assassins.
            Players must manage their champion's development by accumulating
            experience points, gold, and purchasing items that enhance their
            abilities. The game's map, Summoner's Rift, is the battleground
            where players vie for control through laning, jungling, pushing, and
            team fights. The strategic depth, frequent updates, character
            diversity, and vibrant community contribute to the game's massive
            appeal. League of Legends is renowned for its accessibility to
            newcomers while also providing depth for seasoned gamers. It's also
            celebrated for its world-class esports ecosystem, with the annual
            World Championship drawing millions of viewers, making it one of the
            most watched and followed esports globally.
          </p>
        </div>
        <div className="lol-roles">
          <h3>Roles in LoL</h3>
          <p>Describe the roles in LoL...</p>
        </div>
        <div className="lol-classes">
          <h3>Classes in LoL</h3>
          <p>Information about classes in LoL...</p>
        </div>
        <div className="lol-complexity">
          <h3>Hero Complexity in LoL</h3>
          <p>
            In "League of Legends" (LoL), hero complexity, often referred to as
            champion difficulty, is an indicator of how challenging a champion
            is to play effectively. Similar to Dota 2's system, LoL's champion
            difficulty can also be thought of as having levels from 1 to 3,
            although in official terms, Riot Games uses a different scale. These
            levels take into account the mechanical skills required, the
            intricacy of ability combos, strategic depth, and the level of game
            knowledge needed to play the champion well. Here's a breakdown of
            the levels: Complexity Level 1: These champions are the most
            accessible and are well-suited for new players or those looking to
            master the fundamentals of the game. Their abilities are
            straightforward, often with a focus on single-target spells or less
            complex skill shots, and they usually lack intricate combo
            sequences. Champions at this level tend to have more forgiving
            gameplay, allowing players to learn the roles and objectives without
            being heavily punished for mistakes. They provide a solid foundation
            for understanding the core mechanics of the game. Complexity Level
            2: Champions with a medium difficulty level require a better
            understanding of the game's mechanics and more nuanced play to be
            effective. They may have abilities that interact in more complex
            ways, require better positioning, or involve skill shots that
            require practice to land consistently. These champions often have a
            combination of passive and active abilities that offer a moderate
            level of depth in strategy and execution. Players need to have a
            grasp of not just their own champion's kit, but also how to respond
            to the abilities of opponents. Complexity Level 3: These are the
            most challenging champions to play in LoL and demand a high level of
            skill, timing, and strategic knowledge. They often feature abilities
            with high outplay potential, including intricate combos,
            transformations, or abilities with multiple uses or activation
            phases. Playing these champions effectively typically involves
            managing complex interactions between abilities, items, and
            understanding nuanced aspects of the game like positioning, map
            awareness, and enemy cooldowns. Such champions can be highly
            rewarding for skilled players, offering significant impact in games
            when mastered. Choosing a champion at the appropriate complexity
            level is essential for player development in LoL. As players become
            more adept at the game, they often experiment with more difficult
            champions, enjoying the depth and potential for making impactful
            plays that these champions provide.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
