NOTES

Idea:

Overall book = "Must Show Your Work"
Part 1: Colors to the Chameleon 
    (this outline)
Covers the bait-and-switch approach to cat theory. Use this to teach Lean, build the structures.

Part 2: The Category Theory of Plane Geometry

Covers Building up the Fibered category, extending the automation, and making use of atlas in anger to create
clever tactics.

Part 3: Antitrisector

Prove, Categorically, that Trisectors can't be built from Compass and Straightedge construction by showing there is no
functor compatible with compass and straighted construction that points to a functor equivalent to a trisection. We can
do this by building up Functors as geometric constructions; finding some 'basis' of functor construction (i.e.,
Poncelet-Steiner constructions reduces to "Given a single geometric primitive (a fixed circle), and a straightedge, all
Compass + Straightedge constructions are possible", so we find a similar minimal set of functors that can construct any
functor of C+S construction and show any C+S is reducible to that composition, and trisection is not).

The primary goal is another bait-and-switch, building up functors for constructions will lead to the next part

Part 4: Seeing Further

Connect the functors to the figure DSL; build proven-correct constructions with them. 


----


# Ch1. "Dreams of Sovereignty"

> Edward...
> Would he were wasted, marrow, bones and all,
> And yet, between my soul's desire and me—
> Is Clarence, Henry, and his son young Edward,
> A cold premeditation for my purpose!
> Why, then, I do but dream on sovereignty...

Introduces the Axiomatization, Lean, and the like. Proofs up to the point where you have to track a fuckload of lines
and it gets painful. Line Separation property is the target.

The axiomatization at this point should mark a few theorems as axia with an asterisk, and point to Appendix T for more
on the proper formalization. The book comes with the library, similar to Tao's Analysis.

We prove Line Sep manually from betweenness and whatever support props we need.

# Ch2. "Chiding the Sea"

> Like one that stands upon a promontory,
> And spies a far-off shore where he would tread,
> Wishing his foot were equal with his eye,
> And chides the sea that sunders him from thence,
> Saying, he'll lade it dry to have his way:
> So do I wish the crown, being so far off;
> And so I chide the means that keeps me from it;

Introduces Arrangements as a solution to the problems arising from betweenness hacking in Line Sep. Explicitly calls out
Polya's principle, we had a hard problem (bookkeeping lines) we found a simpler one (bookkeeping betweenenesses) and we
introduce some sense of 'gluing' betweennesses together to create a bigger structure. Gluing is powerful, we will
remember this.

We reprove Line Sep using our new apparatus. Atlas covers the alternate proof transparently. This entails the P3.3 proof
from greenberg as well; in tarski language though. Reducing it's proof into the structure of the theory itself. We can
use this as an opportunity to talk about how Lean pushes things from Prop -> Type by means of certified structures (data
+ proofs).

We head towards Pasch/3.6/3.7 from Greenberg; trying to create places where we can't get away with just the arrangement
stuff. We pass through the 3.3 gate with arrangements quickly though.

# Ch3. "No Kingdom"

> Well, say there is no kingdom then for Richard;
> What other pleasure can the world afford?
> I'll make my heaven in a lady's lap,
> And deck my body in gay ornaments,
> And witch sweet ladies with my words and looks.
> O miserable thought! and more unlikely
> Than to accomplish twenty golden crowns!

A nadir, we introduce the motivating items, Pasch, 3.6, 3.7 -- some nasty, line-part heavy theorem.

Introduces Pasch/3.6/3.7 proper as "Line Bookkeeping", asks "could we apply the gluing concept here?"

Datastructure-first approach to Lines. We see the structure resolve the proofs quickly, we build them intuitively and
without significant formal study. We just think like programmers and learn to rely on Lean to ensure soundness for us --
so long as we build out of good parts and don't try to undermine the thing, Lean will keep us honest.

# Intermission "Love Foreswore Me."

> Why, love forswore me in my mother's womb:
> And, for I should not deal in her soft laws,
> She did corrupt frail nature with some bribe,
> To shrink mine arm up like a wither'd shrub;
> To make an envious mountain on my back,
> Where sits deformity to mock my body;
> To shape my legs of an unequal size;
> To disproportion me in every part,
> Like to a chaos, or an unlick'd bear-whelp
> That carries no impression like the dam.
> And am I then a man to be beloved?
> O monstrous fault, to harbour such a thought!

An aside, we just lay out the history of a couple 'completely unrelated area of mathematics'. Topology, Complex
Analysis, Algebraic Geometry, and ultimately Category Theory.

We also talk about the speech being quoted. Why I'm quoting it, etc. Richard was throughout Henry VI part 2, acting
under false pretense. He is nominally for his brother, but secretly is undermining him. In a way, I've been lying too,
this isn't a geometry textbook, it's about Sheaves, Categories, and Grothendieck Sites... We cut to the next section

# Ch4. "Hewing our way out."

> Then, since this earth affords no joy to me,
> But to command, to cheque, to o'erbear such
> As are of better person than myself,
> I'll make my heaven to dream upon the crown,
> And, whiles I live, to account this world but hell,
> Until my mis-shaped trunk that bears this head
> Be round impaled with a glorious crown.
> And yet I know not how to get the crown,
> For many lives stand between me and home:
> And I,—like one lost in a thorny wood,
> That rends the thorns and is rent with the thorns,
> Seeking a way and straying from the way;
> Not knowing how to find the open air,
> But toiling desperately to find it out,—
> Torment myself to catch the English crown:
> And from that torment I will free myself,
> Or hew my way out with a bloody axe.

Asks, "What the heck _are_ these structures we built?" We start digging into what we built as an artifact of Lean, what
have we assumed about gluing to make this all tractible? What essence does the structure we just built have? _Why_ does
it work, does it live anywhere else?

We don't have a particular target, still, we're just understanding what we built. We can start to see some of the
properties mentioned in the intermission here. Gluing adheres to the gluing axiom. The structure maps from Tangling ->
Set. You can start to see mappings from Theory -> Model, we gesture towards bigger things, we formalize by proving our
Tangling Sheaf is a proper sheaf and does sheaf things.

# Ch5. "Needle Drop"

> I'll play the orator as well as Nestor,
> Decieve more slyly than Ulysses could,
> And like a Sinon take another Troy.

We name the thing, "This is a Sheaf, it is in fact the Sheaf of Tanglings of points on a line." We talk about what Sheaf
theory _is_ in it's most fundamental sense, it is a way to capture the _structure imposed by axioms on elements of an
arbitrary space_. In our case, it is the arbitrary structure our programs impose over types that we can then use to
unify down the proofs. We pick some big targets. Desargue, Pappus, the 9-point theorem. We aim our guns at them.

# Ch6. "I can smile"

> Why, I can smile, and murder whiles I smile,
> And cry 'Content' to that which grieves my heart,
> And wet my cheeks with artificial tears,
> And frame my face to all occasions.

The three big ones may need some additional work to introduce other sheaves, we set out a plan for the easiest of them,
ideally we've built enough theory now where we can knock it out without adding much, we're going to start to extract the
sheaf structure _from_ the things that have it so we can start to prove theorems _about sheaves_. This was never a
geometry book, it was always about sheaves. We knock out one of them with minimal refactor, we take aim at the next

This is where we start teasing apart the various categorical structures, starting with a simple functorial model and
some extensions to tangling, we eventually notice the symmetry-breaking argument and conjecture about arrangements and
there relationship to symmetry groups.

We can point to doing analytical work on the strucutre (indeed, that's what we're doing to some extent, building pieces
on we can analyze and generalize later.

We'll also look at building up all the various other constructions in terms of these functors; and make some veiled
references to Operad theory.

# Ch7. "Taking another Troy"

> I can add _Colors to the Chameleon_
> Change shapes with Proteus for advantages,
> And set the murderous Machiavell to school
> Can I do this? And cannot get a Crown?

By this point we'll have built up sheaf theory around lines, angles, and shapes. We'll look at fibration and fibered
categories and build a category theoretic view without ever touching set theory or any other such ickies.

We tackle the most frustratingly difficult problem we can find with our suite of tools -- necessary irregularity of the
17-gon or some shit, _real_ heavy stuff. We review the book as a whole, call out the remaining work of fully basing the
theory on Tarski instead of the stub. We do the final mathlibification of the book and reveal the secret code to unlock
a version of the book that contains all the answers in like, a single tactic, essentially. Just:

```lean

atlas proposition 1.2.3 :=
    -- metadata
    claims <statement> := by chameleon
```

and the proof is free or near to it.

# Epilogue. "Further shores"

> Dukedom got speech from Tempest

> Where to go next, fibered categories and sheaves in place, what else can we build from here?
> - Metric Decoration / Field Embedding
> Impossibility results and construction methods
> - Functors map to constructions, and therefore families of functors to construction methods
> Decidability and alternatives to Quantifier Elimination
> - Extending to include Congruence
> - Decidability algorithm subject to congruence - Appendix D
> Generalizing Tanglings and Arrangements
> - Handling the Cyclic case
> - Generalizing to arbitrary symmetry group
> - Combinatorial Species
> - Reframing Line classifications by Species
> - Refactoring our Functor constructions
> - Tanglings get simpler
> - - Boundaries covered by different symmetry group choice
> - - Cyclic, Acyclic, Weird -- whatever, all supported.

# Appendix B: Bibliography

# Appendix D0: Tarski and Decidability

# Appendix D1: Tanglings and Decidability

Tanglings have an advantage -- we only need to do some poset constraints most of the time, which is much simpler than
quantifier elimination.

# Appendix G: Glossary

# Appendix L1: Lean Fundamentals

A tutorial on Lean

# Appendix L2: Advance Lean

A tutorial proofstate, tactic programming, etc.

# Appendix T: Tarski

Covers the 'true' axiomatization, compared to where-ever we started in Ch1. Details why we started partway down,
emphasize this should not be your _first_ geometry course, probably your second.

# Appendix Z: Further and further

Details about where to go from here
