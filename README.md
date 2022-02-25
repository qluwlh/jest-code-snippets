# jest-code-snippets

[Jest](https://facebook.github.io/jest) snippets extension for [Visual Studio Code](https://code.visualstudio.com/).

## Snippets

Below is a list of all available snippets and the triggers of each one. The **→** means the `TAB` key.

### Files

| Trigger | Content         |
| ------: | --------------- |
|  `jff→` | function        |
| `jfrc→` | react component |
| `jfrh→` | react hooks     |

### Templates

|  Trigger | Content                  |
| -------: | ------------------------ |
|   `jtf→` | function describe        |
|  `jtft→` | function test            |
|  `jtrc→` | react component describe |
| `jtrct→` | react component test     |
|  `jtrh→` | react hooks describe     |
| `jtrht→` | react hooks test         |

### Mock

| Trigger | Content   |
| ------: | --------- |
|  `jfn→` | jest.fn   |
|  `jmc→` | jest.mock |

### React

|  Trigger | Content                             |
| -------: | ----------------------------------- |
|  `imtr→` | import @testing-library/react       |
| `imtue→` | import @testing-library/user-event  |
| `imtrh→` | import @testing-library/react-hooks |

### Globals

|  Trigger | Content       |
| -------: | ------------- |
|  `desc→` | describe      |
| `desco→` | describe.only |
| `descs→` | describe.skip |
| `desce→` | describe.each |
|    `ae→` | after each    |
|    `aa→` | after all     |
|    `be→` | before each   |
|    `ba→` | before all    |

### Tests

|   Trigger | Content              |
| --------: | -------------------- |
|     `it→` | it                   |
|    `ito→` | it.only              |
|    `its→` | it.skip              |
|    `itt→` | it.todo              |
|    `ite→` | it.each              |
|    `ita→` | it(..., async ...)   |
|   `test→` | test                 |
|  `testo→` | test.only            |
|  `tests→` | test.skip            |
|  `testt→` | test.todo            |
|  `teste→` | test.each            |
| `testet→` | test.each (table)    |
|  `testa→` | test(..., async ...) |

### Expect

|   Trigger | Content                            |
| --------: | ---------------------------------- |
|    `exp→` | expect                             |
|   `expr→` | expect.resolves                    |
|  `exprj→` | expect.rejects                     |
|  `expas→` | expect.assertions(count)           |
|  `expha→` | expect.hasAssertions()             |
|     `tb→` | toBe                               |
|   `tbct→` | toBeCloseTo                        |
|    `tbd→` | toBeDefined                        |
|    `tbf→` | toBeFalsy                          |
|   `tbgt→` | toBeGreaterThan                    |
|  `tbgte→` | toBeGreaterThanOrEqual             |
|    `tbi→` | toBeInstanceOf                     |
|   `tblt→` | toBeLessThan                       |
|  `tblte→` | toBeLessThanOrEqual                |
|    `tbn→` | toBeNull                           |
|    `tbt→` | toBeTruthy                         |
|    `tbu→` | toBeUndefined                      |
|     `tc→` | toContain                          |
|    `tce→` | toContainEqual                     |
|     `te→` | toEqual                            |
|    `tse→` | toStrictEqual                      |
|   `thbc→` | toHaveBeenCalled                   |
|  `thbct→` | toHaveBeenCalledTimes              |
|  `thbcw→` | toHaveBeenCalledWith               |
| `thblcw→` | toHaveBeenLastCalledWith           |
|    `thl→` | toHaveLength                       |
|    `thp→` | toHaveProperty                     |
|     `tm→` | toMatch                            |
|    `tmo→` | toMatchObject                      |
|    `tms→` | toMatchSnapshot                    |
|   `tmis→` | toMatchInlineSnapshot              |
|     `tt→` | toThrow                            |
|    `tte→` | toThrowError                       |
|  `ttems→` | toThrowErrorMatchingSnapshot       |
| `ttemis→` | toThrowErrorMatchingInlineSnapshot |

## Settings

The `editor.snippetSuggestions` setting in vscode `settings.json` will show snippets on top of the suggestion list.

```json
"editor.snippetSuggestions": "top"
```
