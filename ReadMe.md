# PR title validation javascript action

THis action will validate your pull request title and confirm if it matches the supplied regex

## Inputs

### `pr-title`

**Required** The title of the pull request.

### `regex`

**Required** The regex value that should be used to validate the title against.

## Outputs

### `time`

The time we started the action.

## Example usage

```yaml
uses: ruandv/gh_pr_title_validation@[sha/branch/tag]
with:
  pr-title: 'Mona the Octocat'
  regex: ^[a-zA-Z]{1,30}$
```
