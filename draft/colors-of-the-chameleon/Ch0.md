# 0.0.0: What is this book?

_Colors of the Chameleon_ is a book about Geometry, Formal Theorem Proving in Lean, and some commentary on an interesting
problem I encountered while attempting to formalize a Geometry textbook[Greenberg, GIYF]. Appendices L1 and L2 have a
brief tutorial to doing synthetic theorem proving in Lean. I highly recommend following the path I followed with
_Geometry is your friend_ and start attempting to formalize even a few theorems on your own. I ran into issues starting
by Greenberg's Prop 3.3, but I started my unexpected journey that led to this book by Prop 3.7.

This book is also, in some sense, a code review of GIYF; a travelogue on the way up a mountain I didn't expect to climb;
and a (hopefully) easy to digest introduction to both Lean and some cool concepts in Geometry.

# 0.1.0: Who is this book for?

Interested undergraduates who have taken a Geometry course. Ideally you're interested in Formal Theorem Proving and have
a healthy interest in programming generally. Experience with type theory will be very helpful. An afternoon or two
screwing around with Haskell or OCaml or F# will help; prior experience with other provers be extremely valuable.

Seasoned Lean folks and other very smart and attractive people will perhaps find my... syntactical experiments somewhat
heretical; if you can forgive my Sid-like experiments with the toys presented to me by Lean, I think you'll find this a
pretty fun ride.

# 0.2.0: How to use this book.

## 0.2.1: Conventions used in this book

Some sections will be marked `*`, as in `X.Y.Z*:`, these sections are 'important', everyone should read them.

Some sections will be marked `^`, as in `X.Y.Z^:`, these sections are 'difficult', and should probably be skipped on a
first readthrough, unless you have significant prior experience.

Some sections will be marked `#`, as in `X.Y.Z#:`, these sections are 'spoilers', and should be skipped on your first
readthrough.

Sections `X.Y.Z` where `Z` is a letter are Exercises, and will have further instructions on things you should try
yourself.

Sections will generally have four components:

1. Prose: Informal explanation and metaphors of what we are building. These should be digestible by anyone with a
   more-than-passing interest in mathematics and enough understanding of the goal of formal theorem proving to
   understand the more basic motivation (laziness).
2. Informal Proofs: Heuristic or otherwise intuition-heavy, details-light proofs of the underlying idea. Enough to get
   the sense of how the proof should probably go in Lean, maybe enough to convince a friendly ear, but by no means
   rigorous.
3. Formal Proofs: As often as possible, Lean will serve as our peer reviewer. We'll make sure we understand each theorem
   in terms of what it asserts, what axiomatic basis it has, and so on. We will, generally, try to keep the basis
   minimal and Mathlib compatible; though the code in this book is _not_ Mathlib ready and _should not be taken_ to be
   Mathlib-friendly. Mathlib has very different goals than this book.
4. Some commentary and storytelling about what led me on this little journey.

## 0.2.2: Prerequisites

This book will select a _few_ theorems from Euclidean Geometry, and I use GIYF as the library to express them. You do
not _need_ a copy of [Greenberg], but I reccommend one. It will help if you have a sense of geometry generally; but I
will quote all the theorems in plain English and give a reference to the formal proof in GIYF. Proofs will be presented
in prose _and_ Lean simultaneously, though the Lean will be idiosyncratic, as it uses my `Atlas` tool for indexing and
some presentation work. The _proofs_ are standard Lean, `Atlas` just provides metadata scaffolding and indexing, which
is used to create this book.

You will need a workspace for Lean; most people use VSCode and the official plugin. I can report from personal
experience that `lean.nvim` is quite good. 

At a bare minimum, I must assume you are familiar with the concept of proof, typed programming and/or functional
programming (maybe you only write C and enough Lisp to configure `vile`?), and the English language. I will instruct you
on the rest.

## 0.2.3: If you are starting from scratch

First you'll need to learn Lean a bit, that is not the lift it sounds like. First, remember Lean is just a functional
programming language, and as such it is just a syntax for writing functions. Get an environment set up in your editor of
choice, find a tutorial you like or use Appendix L1 to get the hang of things. You do not need L2 yet. If you have no
familiary with typed functional programming. A few afternoons spent learning Haskell enough to be dangerous is worth the
effort. Lean relies on type theory very heavily. In fact, almost all our programs are simply instructing the type system
how to occupy a particular type we have constructed. Appendix L0 has an inadequate introduction disguised as a mediocre
refresher, you may rely on it at your peril.

If you are brand new to Lean, and you do not harbor opposition to the use of LLMs. Most of the big names are pretty good
at writing Lean. I encourage you _not_ to use them to write proofs, but instead to ask about APIs, help in
translating/formalizing informal statements, and especially for writing custom syntax. Almost all syntax I have wanted
to add in the course of writing _Geometry is your friend_ has been simultaneously extremely easy to add, and extremely
tedious to implement and iterate on. The nature of changing a language element is necessarily a bunch of little
iterative refactors with massive footprint. LLMs are ideal tools for that job. Write a few examples of your desired
syntax and it's interpretation in Lean, then let the LLM figure the rest out. We talk about how all of it works in
Appendix L2 if you are interested in DIY, but I recommend you avoid thinking too hard about the syntax side of things if
you can help it. It's better not to hide it while you're new, and when you do, delegating to the machine (or tolerating
the pain) will only help motivate you the way it motivated me.

## 0.2.4: Strong CS, Weak Math

If you're comfortable with dependently typed programming, maybe you'd done the Natural Number Game and want something
meaty. This is the thing for you. As mentioned, the best thing would be to take a stab at Greenberg yourself, but you
don't necessarily need to approach it formally first. In fact, since you (by assumption) have plenty of experience with
the programming, just do some two-column proofs and constructions. There are plenty of texts but Greenberg is
accessible, the history is nice, and requires no deep understanding of other areas of mathematics. It is a really good
foundational text for later exploration.

At a minimum, though, you'll need some vocabulary. Appendix G, the glossary, has everything you need. Read over it,
make your own cheat sheet on paper (or type it, don't cut and paste). Physically copying will help you remember.
Multimodal learning is a powerful tool; do not forget it.

## 0.2.5: Strong Math, Weak CS

Learn Haskell. Stop what you're doing and go solve like, twenty projecteuler.net problems or something. It won't take
you very long, it will feel weirdly familiar after a few hours, and there are a million tutorials around. You won't need
to deeply understand monads or leave a single-file-reloaded-in-a-repl mode of haskell for this. You just need enough to
understand what a type looks like and names of common things. You probably have heard of things like Functors and Monads
and stuff and that's useful for talking about Lean; but we won't need them till pretty late in the book.

The book will rely on your Mathematical intuition to guide you through the proofs, and you will honestly probably have
an easier time than the folks from 0.2.4, but don't mistake the easy hiking in the foothills; when we get to the
mountain it will be important you have yourself well prepared.

## 0.2.6#: If you are an expert in Geometry and Lean

Go read the code of [GIYF], specifically the code in Tangling. Notice the tools I've used to build it. Notice how the
section numbers work in this book.

Do you see the water rising?

# 0.3.0: Who is this book _for_?

## 0.3.1: Dedications

My only friend from high school; and, separately, for my Dad.

## 0.3.2: Acknowledgements

To all the people who have been kind to me, to all the people who taught me kindness.

To all the people who have endured my ramblings about mathematics

To all the people who reminded me that I was actually pretty good at this throughout my life, when I didn't believe.

And last and most, my wife, Sarah and my daughter, Julie.

Thank you.

