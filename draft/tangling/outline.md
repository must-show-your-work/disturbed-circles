A sequence of videoposts (blogs with a manim video associated) that explain and study tanglings as a first class object.

```lean
/- a function from specific n -> Symmetry Group -/
alias DNA : (n : N) -> SymmetryGroup

structure Tangling (n : N) (G : DNA(n)) :=
    points : Finset Point
    constraints : Finset NextTo

/- an algebra def'n -/

/- proof of tarski's axioms -/

```

# Post 1

GOAL: Motivate the Tangling, resolve a simple geometry issue with it

NARRATOR (Me): Let's say you have a line.

> A line expands on screen like an old CRT turning on.

NARRATOR: Our lines look lonely, let's make them a friend, a point!

> A point P appears off the line L

NARRATOR: Don't be afraid little guy. Ooh, you've got names, L and P, nice. Look, another point!

> A point Q, then R S T U V ...

NARRATOR: Oh man, lots of friends landing on L, chaos! Let me call my friend Betweeness; she'll have tools for this.

BETWEENESS (Sarah): "Oh yes, I can help. Here, take these"

> A bunch of lines start to appear between the points, forming a complete graph.

NARRATOR: What are these supposed to help with?

BETWEENESS: "Oh, they're step one. Whenever Incidence shows up, we need these."

NARRATOR: Who is Incidence?

> Dramatic Sting

INCIDENCE (Matt Berry): IT IS I, INCIDENCE! I HAVE ARRI-VED.

BETWEENESS, with a withering gaze: "That's Incidence."

> BETWEENESS produces from the aether something she hands to the narrator

NARRATOR: What's this?

BETWEENESS: "Scissors"

> BETWEENESS takes a pair of scissors with 'P' at the hinge and 'R' and 'S' on either fork. She cuts a couple strands
> between P and R and P and S.

NARRATOR: "What are you doing?"

BETWEENESS, throwing the previous pair of scissors behind her and producing a new set: "Watch"

> BETWEENESS cuts a few more times, and slowly the points stop jumping over and around each other and settle into
> loose-but-fixed-in-order positions.

BETWEENESS: "Now everyone sits in a nice order. P, Q, R, S, ... yep, all there."

NARRATOR: "How do those work?"

INCIDENCE: INSOLENCE! There was such delightful disorder there, why would you pin these poor points down?

BETWEENESS: "These are... suggestions... sharp ones. They tell points to stay in line; at least from this side. By
cutting selectively, everyone finds a consistent place."

NARRATOR: "Oh, that's lovely. Hey wait -- what are you -- Incidence!?"

INCIDENCE: "What?"

> Incidence has grabbed the rays from R-away-from-P and S-away-from-P and broken them off. Then bends the remaining
> connected segments.

INCIDENCE: "I call it an ang-gell"

> Betweeness pinches the bridge of her nose.

BETWEENESS: "I just got them organized."

NARRATOR: "Oh shit he's grabbed the other points, what are you doing!"

> INCIDENCE creates another angle

INCIDENCE: "Look, I have made it an friend."

BETWEENESS: "Ooh, those are nice, my sister would like those. Hey Connie!"

CONGRUENCE (): "

-------


# Post 2
