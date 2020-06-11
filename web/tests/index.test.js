import { render } from '@testing-library/svelte'

import Comp from '../src/routes/index.svelte'

describe("index component", () => {
  test('shows proper heading when rendered', () => {
    const { getByText } = render(Comp, {})
  
    expect(getByText('Aangemeld')).toBeInTheDocument()
    expect(getByText('Aanwezig')).toBeInTheDocument()
    expect(getByText('Afgemeld')).toBeInTheDocument()
  })
});
