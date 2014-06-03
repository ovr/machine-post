var ns = window.ns = function (namespace, payload, context) {
    payload = payload || {};

    context = context || window;

    var parts = namespace.split('.'),
        parent = context,
        currentPart = '';

    while (currentPart = parts.shift()) {
        if (parts.length !== 0) {
            parent[currentPart] = parent[currentPart] || {};
        }
        else {
            parent[currentPart] = parent[currentPart] || payload;
        }
        parent = parent[currentPart];
    }

    return parent;
}