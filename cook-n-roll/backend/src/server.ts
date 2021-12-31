import express, { Request, Response } from 'express';
import cors from 'cors';
import _slugify from 'slugify';

const app = express();

app.use(cors())
app.use(express.json());

const recipes = [
  {
    name: 'Teste 1',
    slug: 'teste-1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl:
      'https://img.cybercook.com.br/imagens/receitas/644/strogonoff-de-frango-1-840x480.jpg?q=75',
  },
  {
    name: 'Teste 2',
    slug: 'teste-2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl:
      'https://img.cybercook.com.br/imagens/receitas/644/strogonoff-de-frango-1-840x480.jpg?q=75',
  },
  {
    name: 'Teste 3',
    slug: 'teste-3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    imageUrl:
      'https://img.cybercook.com.br/imagens/receitas/644/strogonoff-de-frango-1-840x480.jpg?q=75',
  },
];

function slugify(text: string): string {
  const slug = _slugify(text).toLowerCase();
  const sufix = (Math.random() * 100000).toFixed(0);

  return `${slug}-${sufix}`
}

app.get("/api/v1/recipes", (request: Request, response: Response) => {
  return response.json(recipes);
})

app.get("/api/v1/recipes/:slug", (request: Request, response: Response) => {
  const { slug  } = request.params;

  const recipe = recipes.find((recipe) => recipe.slug === slug);

  if (!recipe) {
    return response.status(404).json({ error: `Recipe not found: ${slug}` });
  }

  return response.json(recipe);
})

app.post("/api/v1/recipes", (request: Request, response: Response) => {
  const recipe = request.body;
  recipe.slug = slugify(recipe.name);

  recipes.push(recipe);

  return response.status(201).json({ slug: recipe.slug });
})

app.put("/api/v1/recipes/:slug", (request: Request, response: Response) => {
  const { slug  } = request.params;
  
  const existing = recipes.find((recipe) => recipe.slug === slug);
  
  if (!existing) {
    return response.status(404).json({ error: `Recipe not found: ${slug}` });
  }
  
  const recipe = request.body;

  if (recipe.name !== existing.name) {
    recipe.slug = slugify(recipe.name);
  }

  Object.assign(existing, recipe);

  return response.status(201).json({ slug: recipe.slug });
})

app.delete("/api/v1/recipes/:slug", (request: Request, response: Response) => {
  const { slug  } = request.params;
  
  const index = recipes.findIndex((recipe) => recipe.slug === slug);

  if (index === -1) {
    return response.status(404).json({ error: `Recipe not found: ${slug}` });
  }

  recipes.splice(index, 1);

  return response.status(204).send();
})

app.listen(3333, () => { console.log('Server is running') });
