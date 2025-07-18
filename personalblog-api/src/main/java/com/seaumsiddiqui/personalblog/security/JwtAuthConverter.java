package com.seaumsiddiqui.personalblog.security;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.convert.converter.Converter;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtClaimNames;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@Slf4j
@RequiredArgsConstructor
@Component
public class JwtAuthConverter implements Converter<Jwt, AbstractAuthenticationToken> {

    private static final JwtGrantedAuthoritiesConverter jwtGrantedAuthoritiesConverter = new JwtGrantedAuthoritiesConverter();

    private final JwtAuthConverterProperties properties;

    @Override
    public AbstractAuthenticationToken convert(@NonNull Jwt jwt) {
        // Combines:
        // 1. Standard authorities (from 'scope' or 'scp' claim)
        // 2. Custom resource roles (from 'resource_access' claim)
        Collection<GrantedAuthority> authorities =
                Stream.concat(jwtGrantedAuthoritiesConverter.convert(jwt).stream(), extractResourceRoles(jwt).stream()).collect(Collectors.toSet());
        String claimName = properties.getPrincipalAttribute() == null ? JwtClaimNames.SUB : properties.getPrincipalAttribute();
        return new JwtAuthenticationToken(jwt, authorities, jwt.getClaim(claimName));
    }

    private Collection<? extends GrantedAuthority> extractResourceRoles(Jwt jwt) {
        // Focuses on 'resource_access.<backend-client>.roles'
        Map<String, Object> resourceAccess = jwt.getClaim("resource_access");
        Map<String, Object> resource;
        Collection<String> resourceRoles;
        if (resourceAccess == null
                || (resource = (Map<String, Object>) resourceAccess.get(properties.getResourceId())) == null
                || (resourceRoles = (Collection<String>) resource.get("roles")) == null) {
            return Set.of();
        }

        return resourceRoles.stream()
                .map(role -> {
                    log.info("Credentials: {}", resourceRoles);
                    log.info("User credentials: {}", role);
                    return new SimpleGrantedAuthority("ROLE_" + role);
                })
                .collect(Collectors.toSet());
    }

}