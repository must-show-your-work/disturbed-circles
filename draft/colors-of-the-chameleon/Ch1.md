# 1.0.0 "Dreams of Sovereignty"

> Edward...
> Would he were wasted, marrow, bones and all,
> And yet, between my soul's desire and me—
> Is Clarence, Henry, and his son young Edward,
> A cold premeditation for my purpose!
> Why, then, I do but dream on sovereignty...

Geometry is among the more elegant forms of mathematics, in my opinion. I love it. In the latter part of 2025, I became
interested in the Lean theorem prover. I had seen Terrance Tao do a couple blog posts and saw (but never got around to
watching) him do some work in VSCode with Lean and Copilot. Autoformalization isn't my thing, then or now, and that was
the only understanding I had about LLMs in the Math space; so I dismissed the LLM part, but kept the interest in Lean
and started looking for a project to do.

I went through, as many do, the Natural Number Game, but didn't notice Tao's _Analysis_ project before I settled on the
perfect option.

In college I went through an abrupt and pretty painful transfer from one school to another. I didn't want to transfer,
but finances meant that I didn't have a choice. I was demoralized. I felt like a failure. I persisted in both that
feeling and my college career, and I enrolled in the local State College.

In getting set up, I sat with a professor there who patiently listened as I explained my situation. He sorted out which
credits transferred, and I was left with a laundry list of wasted work, and a punchlist of credits to acquire. I signed
up for physics, a couple philosophy classes, calculus, and Geometry.

The class was taught by my first advisor, and I figured it'd be a lay up, since I knew geometry pretty well from high
school. I did not know it very well at all, it turned out, but I digress. The book chosen was _Euclidean and
Noneuclidean Geometry_ by Martin Jay [Greenberg], and as soon as I opened it I knew I was going to like it. I spent the
semester writing every proof in LaTeX; creating custom macros and syntax. I took all my notes in LaTeX, live in class.
At one point my professor suggested I just take notes like a normal human. I said "Where's the fun in that?"

So the prospect of coming _back_ to this was just too good to pass up. I knew enough about Lean prior to starting to
know that I could just avoid most of the difficulty of learning Mathlib's style and standards and just do a simple, self
contained project, formalizing theorems with existing proofs, and have a nice pleasant time up a gentle hill while I
learned a new language and did some math.

Let's see what that looked like at the start.

# 1.1.0: Initial Formalization

[GIYF] is a _synthetic_ theory of Geometry based on Greenberg's choice of Hilbert's Axiomatization. Very famously this
Axiomatization relies on an underlying Set Theory; which is how Greenberg defines Lines. Tarski offered an alternative
formulation which we will not be using which is first-order-with-an-axiom-schema, which has some pretty neat advantages
we talk about in [Appendix D0]. An alternative to a _synthetic_ theory is a _analytic_ one, which starts with a
structure; say the Cartesian Plane, and _analyzes_ it looking for properties or details to be proven _about the object_.
If the object represents Geometry, then proving properties about the object is proving properties about geometry. This
was, broadly speaking, what Descartes did when he started studying the plane. Analysis is an extremely powerful method
of mathematics.

Another option might be to study Geometry _algebraically_. That is, attempting to classify and understand different
geometric problems and develop language and operations to describe them and transformations therebetweeen. An example of
algebraic thinking in Geometry might be most easily found in the study of Conic Sections and their properties. We
classify Parabola, Hyperbola, Ellipses, and Circles and study how they relate and differ to one another. Similarly, we
could study the algebra of polynomial equations (which are fundamental geometric objects), and we could do so often
without drawing any pictures or anything. How very sad.

Yet a third option might be to concentrate on the Topology of the structures in your environment; how are the various
structures under study connected. In the geometry of the Cartesian plane, this might look like studying continuous
functions, differentiable functions, or other such structures. In more abstract settings you might connect it to
homotopy or other arcane mysticism.

Our approach is synthetic, but with these other paradigms in mind. We do not have to settle on one, indeed, it is
convenient to 'switch modes'. A personal hero of mine is Polya, a mathematician of no small repute. His work _How to
Solve It_ [HTSI] is highly recommended, and a critical idea taken from it is paraphrased thus:

> If you have a hard problem you do not know how to solve, you also have a simpler version of that problem you do not
> know how to solve. Work on that version first.


## 1.1.1: Hilbert's Axiomatization: v0

We will lay out our initial axiomatization below, and we'll think like programmers about it; how can we reduce it, how
can we generalize it, how can we make it _mean more_ while _saying less_ about it? Parsimony is a shared virtue.

```lean

type Point
def Line := Set Point

axiom I1
axiom I2

syntax 'on'
syntax 'off'

syntax 'line', 'ray', 'segment'

axiom B1
axiom B2
axiom B3
axiom B4

syntax 'A-B-C'

axiom C1
axiom C2
axiom C3
axiom C4
axiom C5
axiom C6

syntax 'A \congr B'
```

## 1.1.2: Hilbert's first problem, Lines.

This axiomatization, as mentioned, has a wart. Lines are Sets (ick) of points. This will, of course, hurt us; but we
must tolerate the pain, or take the steeper route Tarski left for us. I understand Greenberg's choice here, Hilbert's
theory, while formally complicated, relies on a very intuitive metaphor. Sets were chosen as the first 'operating
system' for mathematics precisely because they're pretty intuitive to think about. The operations feel natural, and
indeed, finite set theories are _extremely_ tractible bits of mathematics. Most of the time we're concerned with only
some finite subset of _named_ points on a line, so most of the time the wart that is "Set Point" there shouldn't bother
us.

This hope will soon be dashed, but the dashing of that hope is what brought you this book, so do not worry, the Ring
will make it to Mordor.

We can take a minute to think about some worries we might have from the lines-as-sets idea; size issues, paradoxes, etc.
The critical issue though has less to do with this and more to do with how _empty_ the definition is. If we think of it
like we would a datastructure, a Line is _far_ more interesting than this representation would indicate. There are
conditions and constraints that lines (and the points on them) must have. None of that data is tracked _with the line_,
which means that _when that data needs to be used_, we must furnish it for our referee, Lean.

Greenberg is not bound by this referee, his only audience is _your intuition_, and that is precisely the thing that
formalization helps you identify. _What is Greenberg's intuition?_, and moreover, _What is **your** intuition?_. These
two answers, and the differences between them, are the gap Greenberg is going to try to help you bridge; but for Lean,
the gap is the _point_. We want to understand the structure of the _bridge_, so we can encode it, study it, and
generalize it.

It will turn out, as you will see, that the typical problems using Sets introduce are not actually the ones we care
about, and a far simpler theory of lines is possible and even (I think) better matches the _intuition_ that at least
Greenberg has for geometric objects and their behavior.

## 1.1.3**: Formalization Choices

In Mathlib, formalization is very structure/class focused. This makes sense, because it is almost always more ergonomic
in the general case to have a tidy structure. It is, however, a pretty rough step I have to take away from my intuition
when thinking mathematically. I suspect I am not alone in that, when I think mathematically, I use a certain style of
language and a certain mode of speech. It is difficult to hold the argument in your mind in that language, and mentally
translate to another. The options are to develop simultaneous fluency to the point of translation in real time; or to
redevelop intuition to express itself and operate in the new language; or you do something faithful to your intuition
and you pay the cost.

I initially chose the third option, and I remain committed to it. It turns out, as we will see, that you can have this
cake and eat it. In [GIYF] and here, we operate in the `Prop` type, which represents propositions. Mathlib prefers to
operate in `Type` itself (of which `Prop` is a member), and items in a style of 'certified datastructure', where instead
of a propositional value, you instead manipulate and pass around structures which contain some data and some proofs
about that data. You can prove lemmas and properties about those structures, and build little algebras around them to
manipulate them into various shapes. Mathlib is very powerful precisely because you can build up structures that plug
into this vast network of other structures and get lots of 'free' theorems as a result.

# 1.2.0: Initial Success

> Couple of simple propositions here; note how Ch2 of [Greenberg] flew by, false sense of security.

```lean
atlas commentary := by
  via proposition 2.5
  page 71
  name "Every point has at least two distinct lines through it"
  preface "For every point P, there are at least two distinct lines through P"

  figure := by
    construction { infer }
    title "Proposition 2.5"
    index 1
    caption "Through any P there pass at least two distinct lines L and M."

atlas proposition 2.5 "Every point has at least two distinct lines through it"
  : ∀ P : Point, ∃ L M : Line,
    L ≠ M ∧ (P on L) ∧ (P on M) := by
        intro P
        have ⟨Q, PneQ⟩ := via lemma 1.0.4 P
        have ⟨PQ, _⟩ := via axiom I.1 P Q PneQ
        idea "We have an arbitrary ray PQ, by P2.3 there is a point R not on it."
        obtain ⟨R, RoffPQ⟩ := proposition 2.3 PQ
        comment "Since PQ avoids R, P ≠ R"
        have PneR : P ≠ R := by
            by_contra! hNeg
            rw [<- hNeg] at RoffPQ
            obvious
        comment "So we have PR ≠ PQ"
        obtain ⟨PR, ⟨PonPR, RonPR⟩, PRuniq⟩ := via axiom I.1 P R PneR
        use PQ, PR
        have PQnePR : PQ ≠ PR := by
            rw [via lemma 1.0.11]
            use R; obvious
        obvious
```

Here is a simple enough proof using these axioms and `Atlas` (and `Figure`, though we won't talk about that right now),
to provide metadata management. `via` here is a custom tactic for looking up theorems managed by `Atlas`. `Atlas`'s
purpose is to provide structure for cataloging and formalizing results from existing texts. It consumes mathlib, it does
not directly contribute to it, but it does not mess with the _prover_ in any significant way, it just wraps some extra
material for conveniently embedding metadata and commentary on proofs inline in a way that can easily extracted into
secondary formats, including this book, it's website, and the underlying graph database that powers both.

Let's examine this proof in detail. The relevant part is in the second section. This comes from
[GIYF:Geometry/Ch2/Prop/P5.lean], I've omitted the boilerplate around the meat of the theorem. The theorem posits the
existence of two distinct, abstract lines through a particular point P. The proof involves using a prior lemma to
construct an arbitrary point that is distinct from P, and then use another proposition to construct a third point not on
the ray PQ, and then using PQ and PR, we have our final result by proving these two lines are not equal.

Greenberg leaves these as exercises to the reader, and I think that in-and-of-itself is instructive. These are
'subintuitive' to Greenberg. They take very little, but we can see that, in fact, this proposition relies on four other
faces (I-1, lemmas 1.0.4 and 1.0.11, and proposition 2.3), and includes a couple internal proofs to establish the
result. This is not a _ton_ of work, but it is certainly a little more than trivial.

Now, notwithstanding the ability of the author of the formal proof, we can at least accept that there is nontrivial
machinery operating in the mind of Greenberg, and likely also _in you_. I doubt that, when reading the statement "Every
point has at least two distinct lines through it" you did anything more than shrug and say "Of course." Perhaps if you
sorted yourself amongst those in the rarified air of those of 0.2.6 (I, the author, land myself more closely with those
of 0.2.4 on weekdays, and 0.2.5 on the weekend), you may have thought through the proof. More likely than not, though,
the proof existed well below what seemed obvious, because it _is_ obvious (in fact, the proof even says so via custom
tactic)!

The point of this isn't to say we should reject Greenberg for being insufficiently formal, rather, it's to say "What
_exactly_ does Greenberg _really_ think these objects are?" Moreover, "What _data_ is being used _about these
structures_ that is _not captured_ in their axiomatic definitions?"

There is _something_ that these structures are doing that lets Greenberg dispatch some ideas with little thought, where
Lean will claim we actually owe a _huge_ amount of bookkeeping. My conjecture is this: Greenberg _doesn't_ think Lines
are Sets; neither did Hilbert. Rather, Sets are the _best approximation available_ to the _actual_ underlying structure
of geometric objects like lines, segments, and so on.

# 1.3.0: Hilbert's second problem: Lines.

Let's look at another proof, this one is less present. I'll omit the commentary block and just include the proof.

```lean
atlas proposition 3.3.i "Betweenness from shared outer pair: B-C-D from A-B-C and A-C-D"
  : (A - B - C) ∧ (A - C - D) -> B - C - D := by
  intro ⟨ABC, ACD⟩
  have distinctABCD : distinct A B C D := via exercise 3.Betweenness.1.a ⟨ABC, ACD⟩
  separate at distinctABCD
  have cL : collinear A B C D := via exercise 3.Betweenness.1.b ⟨ABC, ACD⟩
  have LeqAB : cL = (line A B : Line) := via lemma 2.0.2 AneB
    ⟨cL.mem A, obvious, cL.mem B, obvious⟩
  have ⟨E, EoffcL⟩ := proposition 2.3 cL
  let EC := (line E C : Line)
  have BonAB : B on cL.line := cL.mem B
  have DonAB : D on cL.line := cL.mem D
  have LneEC : cL ≠ EC := by
    have EonEC : E on EC := by obvious
    by_contra! hNeg; rw [hNeg] at EoffcL; contradiction
  have ConEC : C on EC := by obvious
  have ConLintEC : C on cL ∩ EC := ⟨cL.mem C, ConEC⟩
  have LnparEC : cL ∦ EC := by
    by_contra! hNeg
    have emptyInter : cL ∩ EC = ∅ := by obvious
    rw [emptyInter] at ConLintEC
    contradiction
  have LintECatC : cL intersects EC at C := (via lemma 2.0.17 C cL EC ⟨LneEC, LnparEC⟩).mp ConLintEC
  have AoffEC : A off EC := (via lemma 2.0.23 AneC LintECatC).resolve_left (not_not.mpr (cL.mem A))
  have BoffEC : B off EC := (via lemma 2.0.23 BneC LintECatC).resolve_left (not_not.mpr (cL.mem B))
  have DoffEC : D off EC := (via lemma 2.0.23 CneD.symm LintECatC).resolve_left (not_not.mpr (cL.mem D))
  have ECsplitsAandD : EC splits A and D := via lemma 2.0.22 ACD ((via lemma 1.0.13).mpr LintECatC)
  by_cases raa : EC splits A and B
  · page break
    have ⟨X, LintECatX, Xuniq⟩ : ∃! X : Point, (cL intersects EC at X) := by
      rcases via lemma 2.0.1 cL EC with LparEC | LintECatX | LeqEC
      · exfalso; rwa [LparEC] at ConLintEC
      · exact LintECatX
      · exfalso; rw [<- LeqEC] at AoffEC; contradiction
    have ⟨XonL, XonEC⟩ := via lemma 1.0.16 LintECatX
    have AXB : A - X - B := by
      have colAXB : collinear A X B := by
        use cL
        intro P PinAXB
        simp only [Finset.mem_insert, Finset.mem_singleton] at PinAXB
        rcases PinAXB with PeqA | PeqX | PeqB
        · rw [PeqA, LeqAB]; obvious
        · rwa [PeqX]
        · rw [PeqB, LeqAB]; obvious
      have AneX : A ≠ X := by by_contra! hNeg; rw [hNeg] at AoffEC; contradiction
      have BneX : B ≠ X := by by_contra! hNeg; rw [hNeg] at BoffEC; contradiction
      have distinctAXB : distinct A X B := by
        refine ⟨?_⟩
        rw [Finset.card_insert_of_notMem (by simp [AneX, AneB])]
        rw [Finset.card_insert_of_notMem (by simp [BneX.symm])]
        rfl
      rcases via axiom B.3 A X B ⟨distinctAXB, colAXB⟩ with ⟨AXB, _⟩ | reject
      · exact AXB
      · have ECguardsAB : EC guards A and B := by
          refine ⟨AoffEC, BoffEC, Or.inr ?_⟩
          by_contra! hNeg
          have ⟨P, PonAB, PonEC⟩ := hNeg
          have PonLineAB : P ∈ (line A B : Line) := via lemma 2.0.4 PonAB
          have PinIntLine : P ∈ EC ∩ (line A B : Line) := Line.mem_inter.mpr ⟨PonEC, PonLineAB⟩
          have APB : A - P - B := by
            rcases PonAB with APB | AeqP | BeqP
            · exact APB
            · exfalso; rw [<- AeqP] at PonEC; contradiction
            · exfalso; rw [<- BeqP] at PonEC; contradiction
          have PeqX : P = X := via lemma 2.0.16 cL EC LneEC LnparEC ⟨LeqAB.symm ▸ PinIntLine.symm, ⟨XonL, XonEC⟩⟩
          rcases reject with ⟨_, XAB, _⟩ | ⟨_, _, ABX⟩
          · exact via lemma 1.0.18 ⟨PeqX.symm ▸ XAB, APB⟩
          · exact via lemma 1.0.19 ⟨APB, PeqX.symm ▸ ABX⟩
        contradiction
    have CeqX : C = X := via lemma 1.0.12 ⟨LintECatC, LintECatX⟩
    have ACB : A - C - B := CeqX.symm ▸ AXB
    exfalso; exact via lemma 1.0.19 ⟨ABC, ACB⟩
  · push Not at raa
    have ECsplitsBandD : EC splits B and D := by
      by_contra! ECguardsBandD
      have h := via axiom B.4.i ⟨raa, ECguardsBandD⟩
      contradiction
    unfold Splits Guards at ECsplitsBandD
    push Not at ECsplitsBandD
    specialize ECsplitsBandD BoffEC DoffEC
    have ⟨BneD, P, ⟨PonSegBD, PonEC⟩⟩ := ECsplitsBandD
    have PinBDintEC : P ∈ (line B D : Line) ∩ EC := ⟨(via lemma 2.0.4 PonSegBD), PonEC⟩
    have LeqBD : cL = (line B D : Line) := LeqAB ▸ via lemma 2.0.2 BneD
      ⟨LeqAB ▸ BonAB, obvious, LeqAB ▸ DonAB, obvious⟩
    rw [LeqBD] at LintECatC
    rw [LintECatC] at PinBDintEC
    have PeqC : P = C := by obvious
    rw [<- PeqC]
    rcases PonSegBD with BPD | BeqP | DeqP
    · exact BPD
    · rw [BeqP, <- PeqC] at BneC; contradiction
    · rw [DeqP, <- PeqC] at CneD; contradiction
```

This is a significantly less pleasant theorem. In [Greenberg], the proof is 10 steps, in lean, it's 160LOC, very few of
which are particularly interesting. Greenberg cites 6 total unique theorems. We needed a fair few more (I stopped
counting after 10), so the underlying intuition is working quite hard here, let's look at the _kinds_ of things I'm
spending time on in detail in the formalization from [GIYF].

A recurring theme will be to 'think like programmers', if I'm trying to reduce the size of code, I look for duplication.
No different here. One thing that should stick out is how many intermediate results I need and how many times I have to
rewrite with `*eq*` hypotheses. I name my hypotheses consistently across proofs; the naming is somewhat idiosyncratic,
but it is pretty useful for analyzing here. We can see almost 20 `rw` and `rwa` sites, almost all of which are just
negotiating equality of different points. I don't know what it smells like yet, but that has an undeniable odor of
repetition.

A separate repetitive theme is the frequency of small `have` statements to construct individual facts about, especially,
lines. Each time we need to manipulate a line, we are forced to trudge through constructing a bunch of tiny facts to get
a specific result, rather than inverting the dependency and making the _structure aware of its properties_ in some
sense. This shows up frequently for lines, let's consider an extreme and contrived example.

## 1.3.1: How many ways can we name a line?

Imagine a line `Q`, which has on it `n` points named `A0, A1, A2, ... An-1`; How many _names_ does that line have?

A line can be named _abstractly_, `L` is an abstract name for all the points that lie on `L`. We can talk about that
object and reason about it. We say "An arbitrary line `L` always has some point `P` such that `P off L`" in Greenberg's
Proposition 2.3, as we saw. We can say "For `L` and a point `P` off `L`, there is at most 1 line `M` through `P` such
that `L || M`" all without ever naming a point on `L`.

A line can be named _concretely_. The line `AB` is the line `L` such that `A` and `B` are on `L` and `A != B`.

Critically, a line can have _many equivalent names_. Our original line `Q` has, in fact, `1 + n choose 2 / 2` names as
presented (can you see why?). This results in a stunningly practical problem. Frequently in proofstates you will be able
to trivially prove a fact about a line with a _specific_ name, but you need to _use_ that fact with the line under a
_different_ name. So it may be easy to show that for distinct `X` and `Y`,  `X and Y on line A B`, and `X and Y on line D E`; these two facts
indicate that AB and DE are the _same_ line; but what you end up having to do is something like:

0. Assume AB != DE, have X != Y
1. Prove X on AB
2. Prove Y on AB
3. Prove X on DE
4. Prove Y on DE
5. Prove AB intersects DE at X
6. Prove AB intersects DE at Y
7. Intersections are unique, so X = Y
8. Contradiction, so AB = DE

Now let's say that our original goal was actually to prove an abstract line `L` containing `A` and `B` also contains `D`
-- then we must now:

1. Prove L = line A B
2. Rewrite to swap AB for DE
3. Show D is on DE (trivially)
4. Rewrite to swap DE for L using step 2.

This is a _huge_ amount of work for an _extremely_ basic fact about these lines. Imagine this scaled up. Indeed, the
place where this finally pinched me enough to do something about it wasn't 3.3 or it's (pretty large) corollaries; in
fact it was just a little later.

## 1.3.2: How many problems do we actually have?

In fact, there is another place where all this malarky shows up, it is in fact the _subject_ of 3.3. Greenberg is trying
to prove a few related statements in and amongst these theorems. Namely that there is some notion of 'adding'
betweenesses together to get other facts about the relation of two points to one another on a given line. That is to
say:

Betweenesses contribute _ordering_ information to named points on a Line.

This suite of theorems contributes to what [GIYF] calls 'Arrangements', which are the natural extension of the
Betweenness syntax (A-B-C) to larger sets of points (A-B-C-D). We'll talk about this later in this chapter, but I don't
want you to lose track of the _two_ problems we've found here.

We're going to try to prove one more theorem to see how rough this gets before becoming 'unweildy to the point of
quitting to figure out an alternative' by proposition 3.7.

## 1.3.A: Line naming

Prove that the line `Q` presented in 1.3.1 in fact has the number of names I suggested.

## 1.3.B: Prove 3.3 by hand

Don't formalize it, you can just study the above for that, we'll formalize it later. For now, just take a stab at it on
your own on paper.

# 1.4.0: Line Separation Property

> Proof of Line Sep is a real bear but doable, and with a few lemmas it's a difficult but readable proof. But the
> writing is on the wall.

# 1.5.0: Hilbert's third problem: Betweenness (but actually Lines)

> Prop 3.3 is critical to the theory, it has to be built up so that we can build arrangements, which lead to tanglings.
> It is also a good example of a 'heavy bookkeeping' proof and it gives us an opportunity to misdirect towards
> arrangements/betweeneess issues while skirting the line naming problem.

We have two problems, betweeness is unweildy, and lines are hard to talk about. Polya says when you have a hard problem,
find a simpler one. We have a conjunction, the only question is which side is simpler?

## 1.5.1: Line Naming

In Computer Science they have a maxim:

> There are only two hard problems in computer science:
> 1. Caching
> 2. Naming
> 3. Off-by-one-errors.

It is usually a bad sign when your problem is one found in a maxim.

In our case, we have a nasty situation, in our line separation puzzle from 1.4.0, we had to carefully track, substitute,
and weed out all the various flavors of segments and lines -- all noise, just appeasing the compiler with information
that is natural to intuit but difficult to deal without resorting to slow custom tactics. Manipulating proofstate is not
free; and even trying to design such a tactic involves a plethora of difficult choices about convention that will simply
_not_ work in the long run. This problem is legitimately quite difficult, and I got stuck on it for several weeks while
I worked on the subject of the next section.

## 1.5.2: n-ary Betweeness

Comparitively, this is a simple problem. We have a list of points we know are on a line, we want to be able to name some
ordering of the line without having to manually chain exisitng betweenness theorems together. Let's just build such a
structure.

This is obviously the simpler side of the problem, let's go build that in the next chapter.
