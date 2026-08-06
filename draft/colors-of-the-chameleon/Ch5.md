# 5.0.0 "Take another Troy"

> I'll play the orator as well as Nestor,
> Decieve more slyly than Ulysses could,
> And like a Sinon take another Troy.

In the last chapter we laid out an informal proof, now we will build our horse and leave it at the city gates, waiting
for the unsuspecting Trojans to bring it inside.

We name the thing, "This is a Sheaf, it is in fact the Sheaf of Tanglings of Named Points on a Line." Sheaves are a
structure born in Topology and built out of Category Theory. This may be, to my best knowledge, the only time anyone has
bothered to use _this_ particular Sheaf structure to study _this_ kind of Geometry, but based on our informal arguments
from the previous chapter (that we will now make formal) I'm confident it is a valid application. It also has some
serious tangible benefits.

First, it is simple as hell. You do not need to know much about topology or algebra or any deep structural mathematics
to understand what is happening and what problem it is solving for us. You've experienced it with me as you've read this
book. You've struggled through dogshit proofs that are 80% bookeeping, 20% math, and 0% fun after the first minutes.
Sheaves were the _natural solution to the problem_ and followed _directly_ from simple intuition about how points and
lines and betweenness work.

Second, it is _powerful_. Sheaves are going to give us the gluing semantics we want, and help us make short work of
dealing with lines. We'll build tactics in this chapter to help with that. Sheaves also give us a couple of paths to
build _the rest of geometry_ in a category-theoretic language that will simply _trivialize_ a lot of proofs. It also
gives us a path _back_ from the broader categorical world into geometry.

Third, it is _extensible_. The concept of a Tangling naturally extends to model segments, rays, angles, bisectors,
perpendiculars, points on a bounded arc, and other such constructions (they turn out to be Functors). With only a little
more effort into the topology, you can extend the concept to _cyclic_ tanglings where you don't necessarily have a
'leftmost' point / the benefit of Greenberg's B-2 Axiom.

Fourth, it's extensions are themselves both interesting and extensible. We will see that Functors respresent the
_concept of a construction_ itself. That is, there is a functor (made up of many others) which represents "All the ways
to perform a Compass-and-straightedge construction." Such functors are studied in Operad theory. In some sense, we can
view Greenberg as studying not Geometry as such, but as studying a family of functions from _Tangle_ -- the category of
tanglings -- to _Geo_ the category of Euclidean Geometry.

Finally, it's just delightful. As I worked with these ideas the first time, and especially as they started to come
together, I had this realization. It's rare that one gets to bring an A-10 to the knife-fight that is undergraduate
geometry. The theorems here are beautiful and true and good, but no one would mistake them for truly difficult problems.
The underlying structure pulls in cutting edge mathematics -- stuff proved within my lifetime in many cases -- and uses
it to _demolish_ the problems posed to it. We will see in Chapter 6 that even the biggest targets in Geometry:
Desargue, Pappus, the 9-point theorem, all will fall subject to the sheer _horsepower_ of the tools we've brought to
bear. We won't see it in detail until chapter 7, but among the many new tools in our toolbox is the concept of
_cohomology_. Which is implicitly part of what we've talked about with lattice disambiguation and the like.

Let's get to proving.

# 5.1.0: The Structure

## 5.1.1: Tangling
## 5.1.2: Tangle is the Category of Tanglings on a Line

# 5.2.0: The Topology

## 5.2.1: Designing the Topology
## 5.2.2: Proving the Gluing Axiom

# 5.3.0: The Sheaf of Tanglings on the Line

## 5.3.1: Tanglings are a Presheaf
## 5.3.2: Tanglings are a Sheaf

# 5.4.0: The new type of a Line

Lines, per Greenberg, are sets of points. He obviously means _Sets_ of points, but Sets are a true and unbridled pain in
the ass. They are the Punch-card OS of mathematics. It is fine to be nostalgic for the days where this was cutting edge,
but we deserve beautiful things, and so we have to ask ourselves. What if Lines weren't sets. What if they were
Tanglings.

This reduces the necessary set theory from 'Lines are infinite sets of points' to 'Lines are Tanglings' which require
only a finite set of points that are subject to some invariants imposed by incidence, betweeness, and congruency. This
is a massive win, as it opens up a huge opportunities to automate theorem proving by organizing the proofstate along
these lines. We turn Line from a bare set to a richer and more efficient structure by encoding information about the
valid arrangement of points on it. By building it as a sheaf we gain access to a categorical toolkit to construct new
objects. We will begin to develop these tools in the next chapter by using one of the most common categorical tools, the
Functor.

Another consequence of the way Tanglings are built is that fundamentally they are just a finite set of points and simple
ordering relations between those points. We prove items are part of the tangling and they become subject to those
constraints, and we add to those constraints by proving they, too, are part of the tangling. This allows us ultimately
to impose the strictures of that ordering onto the system. In order to do this we need a way to index the proofstate and
do this very mechanical bit of proofwork. This will work out to be a tactic, `chameleon`, which builds some internal
structures for indexing the proofstate and then attempts to convert a proofstate into a normal form based on this
tangling structure. Often this can close goals and complete proofs entirely on it's own or with minimal added effort to
breakdown an unfamiliar statement into component parts. This will come in chapter seven.
